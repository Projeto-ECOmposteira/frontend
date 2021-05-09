import { Box, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import moment from "moment";
import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Label, XAxis, YAxis } from "recharts";
import { getReports } from "../../services/reports";
import { ReportPageProps } from "../../types/types";
import { useStyles } from "./styles";

export interface TemperatureData {
  timestamp: number;
  temperature: number;
}

export default function Reports() {
  const classes = useStyles();
  const [temperatureData, setTemperature] = useState<Array<TemperatureData>>(
    []
  );

  const loadTemperatureData = (report: Array<ReportPageProps>) => {
    const temperatures = report.map((report) => {
      return {
        timestamp: Date.parse(report.timestamp),
        temperature: report.temperature,
      };
    });

    return temperatures;
  };

  useEffect(() => {
    async function loadReports() {
      const response = await getReports();
      const temperatures = loadTemperatureData(response);
      setTemperature(temperatures);
    }

    loadReports();
  }, []);

  return (
    <Container component="main" >
      <Typography variant="h5" component="h2" className={classes.header}>
        Últimos alertas registrados
      </Typography>
      <Box>
        <AreaChart width={550} height={300} data={temperatureData}>
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
            tickFormatter={(unixTime) => moment(unixTime).format("DD/MM HH:mm")}
            type="number"
            scale="time"
          >
            <Label
              value={"Horário (h)"}
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
    </Container>
  );
}
