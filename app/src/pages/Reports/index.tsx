import { Box, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getReports } from "../../services/reports";
import { ReportPageProps } from "../../types/types";
import { useStyles } from "./styles";

export interface TemperatureData {
  timestamp: number;
  temperature: number;
}

export interface CarbonNitrogenData {
  timestamp: number;
  carbono: number;
  nitrogenio: number;
}

export default function Reports() {
  const classes = useStyles();
  const [temperatureData, setTemperature] = useState<Array<TemperatureData>>(
    []
  );
  const [carbonNitrogen, setCarbonNitrogen] = useState<
    Array<CarbonNitrogenData>
  >([]);

  const loadTemperatureData = (report: Array<ReportPageProps>) => {
    const temperatures = report.map((report) => {
      return {
        timestamp: Date.parse(report.timestamp),
        temperature: report.temperature,
      };
    });

    return temperatures;
  };

  const loadCarbonNitrogen = (report: Array<ReportPageProps>) => {
    const carbonNitrogen = report.map((report) => {
      return {
        timestamp: Date.parse(report.timestamp),
        carbono: report.cn.c,
        nitrogenio: report.cn.n,
      };
    });

    return carbonNitrogen;
  };

  useEffect(() => {
    async function loadReports() {
      const response = await getReports();

      const temperatures = loadTemperatureData(response);
      setTemperature(temperatures);

      const carbonNitrogens = loadCarbonNitrogen(response);
      setCarbonNitrogen(carbonNitrogens);
    }

    loadReports();
  }, []);

  return (
    <Container component="main" className={classes.root}>
      <Typography variant="h5" component="h2" className={classes.header}>
        Últimos alertas registrados
      </Typography>
      <Box className={classes.content}>
        <Box className={classes.report}>
          <Typography
            variant="h5"
            component="h3"
            className={classes.reportTitle}
          >
            Temperatura da Composteira
          </Typography>
          <AreaChart width={500} height={300} data={temperatureData}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#BC6C25" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#BC6C25" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="timestamp"
              domain={["auto", "auto"]}
              name="Time"
              tickFormatter={(unixTime) =>
                moment(unixTime).format("DD/MM HH:mm")
              }
              type="number"
              scale="time"
            >
              <Label
                value={"Horário (dd/mm hh:mm)"}
                position="insideBottom"
                dy={8}
                style={{ textAnchor: "middle" }}
              />
            </XAxis>
            <YAxis>
              <Label
                value={"Temperatura (°C)"}
                position="middle"
                dx={-8}
                angle={-90}
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              dot={{ stroke: "orange", strokeWidth: 1 }}
              type="monotone"
              dataKey="temperature"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
              unit="° C"
            />
          </AreaChart>
        </Box>
        <Box>
          <Typography
            variant="h5"
            component="h3"
            className={classes.reportTitle}
          >
            Relação entre nitrogênio e carbono
          </Typography>
          <LineChart
            width={500}
            height={300}
            data={carbonNitrogen}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              domain={["auto", "auto"]}
              name="Time"
              tickFormatter={(unixTime) =>
                moment(unixTime).format("DD/MM HH:mm")
              }
              type="number"
              scale="time"
            >
              <Label
                value={"Horário (dd/mm hh:mm)"}
                position="insideBottom"
                dy={8}
                style={{ textAnchor: "middle" }}
              />
            </XAxis>
            <YAxis>
              <Label
                value={"Porcentagem (%)"}
                dx={-8}
                angle={-90}
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
            <Line
              type="monotone"
              unit="%"
              dataKey="carbono"
              stroke="#BC6C25"
              activeDot={{ r: 8 }}
            />
            <Tooltip />
            <Line type="monotone" unit="%" dataKey="nitrogenio" stroke="#DDA15E" />
          </LineChart>
        </Box>
      </Box>
    </Container>
  );
}
