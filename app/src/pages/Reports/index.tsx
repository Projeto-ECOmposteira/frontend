import { Box, FormControl, InputLabel, Select, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AuthContext from "../../contexts/auth";
import { getComposters } from "../../services/composter";
import { getReports } from "../../services/reports";
import { ComposterProps, ReportPageProps } from "../../types/types";
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

  const [composters, setComposters] = useState<Array<ComposterProps>>([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function loadComposters() {
      const response = await getComposters(user?.data?.isSupermarket);
      setComposters(response);
    }

    loadComposters();
  }, []);

  useEffect(() => {
    if (composters.length > 0) {
      setComposteiraId(composters[0]['_id']);
    }
  }, [composters]);

  async function loadReports(id: string) {
    const response = await getReports(id);

    const temperatures = loadTemperatureData(response);
    setTemperature(temperatures);

    const carbonNitrogens = loadCarbonNitrogen(response);
    setCarbonNitrogen(carbonNitrogens);
  }

  function getCompostersObjects() {
    const compostersObjects: any = [];
    composters.forEach((_composter: any) => {
      compostersObjects.push(<option key={_composter.nome} value={_composter._id}>{_composter.nome}</option>)
    });
    return compostersObjects;
  }

  const [composteiraId, setComposteiraId] = useState(String)
  const handleChange = (e: any) => {
    let { value } = e.target;
    setComposteiraId(value)
  };

  useEffect(() => {
    if (composters.length > 0) {
      loadReports(String(composteiraId));
    }
  }, [composteiraId]);

  return (
    <Container component="main" className={classes.root}>
      <Typography variant="h5" component="h2" className={classes.header}>
        Relat??rios das Composteiras
      </Typography>
      <FormControl variant="outlined" className={classes.smallForm}>
        <InputLabel htmlFor="outlined-age-native-simple">Composteira *</InputLabel>
        <Select
          required
          native
          onChange={handleChange}
          label="Composteira *"
          value={composteiraId}
          id="composteiraId"
          name="composteiraId"
        >
          <option aria-label="None" value="" />
          {getCompostersObjects()}
        </Select>
      </FormControl>
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
                value={"Hor??rio (dd/mm hh:mm)"}
                position="insideBottom"
                dy={8}
                style={{ textAnchor: "middle" }}
              />
            </XAxis>
            <YAxis>
              <Label
                value={"Temperatura (??C)"}
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
              unit="?? C"
            />
          </AreaChart>
        </Box>
        <Box>
          <Typography
            variant="h5"
            component="h3"
            className={classes.reportTitle}
          >
            Rela????o entre nitrog??nio e carbono
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
                value={"Hor??rio (dd/mm hh:mm)"}
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
            <Line
              type="monotone"
              unit="%"
              dataKey="nitrogenio"
              stroke="#DDA15E"
            />
          </LineChart>
        </Box>
      </Box>
    </Container>
  );
}
