import { WarningProps } from "../types/types";

export function getWarnings(): Array<WarningProps> {
  const warnings = [
    {
      composterId: "1",
      composterName: "Composteira 1",
      description: "Desconectada há mais de 30 dias",
      startTimestamp: "2012-12-19T06:01:17.171Z",
    },
    {
      composterId: "2",
      composterName: "Composteira 2",
      description: "Desconectada há 01 dia",
      startTimestamp: "2012-12-19T06:01:17.171Z",
    },
  ];

  return warnings;
}
