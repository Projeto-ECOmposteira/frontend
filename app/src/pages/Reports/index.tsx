import Container from "@material-ui/core/Container";
import moment from "moment";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useStyles } from "./styles";

// TODO
export default function Reports() {
  const data = [
    {
      time: 1503617297689,
      temperature: 25,
    },
    {
      time: 1503627297689,
      temperature: 32,
    },
    {
      time: 1503637297689,
      temperature: 40,
    },
    {
      time: 1503647297689,
      temperature: 50,
    },
    {
      time: 1503657297689,
      temperature: 60,
    },
    {
      time: 1503667297689,
      temperature: 60,
    },
    {
      time: 1503677297689,
      temperature: 65,
    },
    {
      time: 1503687297689,
      temperature: 65,
    },
  ];

  return (
    <Container component="main">
      <AreaChart
        width={550}
        height={300}
        data={data}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#BC6C25" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#BC6C25" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
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
            style={{ textAnchor: "middle"}}
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
    </Container>
  );
}
