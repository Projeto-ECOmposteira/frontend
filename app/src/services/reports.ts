import { ReportPageProps } from "../types/types";

export async function getReports(): Promise<Array<ReportPageProps>> {
  const dataReport: Array<ReportPageProps> = [
    {
      timestamp: "2021-04-23T18:25:43.511Z",
      temperature: 25,
      cn: {
        c: 94,
        n: 8,
      },
    },
    {
      timestamp: "2021-04-23T19:25:43.511Z",
      temperature: 32,
      cn: {
        c: 90,
        n: 10,
      },
    },
    {
      timestamp: "2021-04-23T20:25:43.511Z",
      temperature: 40,
      cn: {
        c: 96,
        n: 4,
      },
    },
    {
      timestamp: "2021-04-23T21:25:43.511Z",
      temperature: 50,
      cn: {
        c: 95,
        n: 5,
      },
    },
    {
      timestamp: "2021-04-23T22:25:43.511Z",
      temperature: 60,
      cn: {
        c: 90,
        n: 10,
      },
    },
    {
      timestamp: "2021-04-23T23:25:43.511Z",
      temperature: 60,
      cn: {
        c: 95,
        n: 5,
      },
    },
    {
      timestamp: "2021-04-24T00:25:43.511Z",
      temperature: 65,
      cn: {
        c: 92,
        n: 8,
      },
    },
    {
      timestamp: "2021-04-24T01:25:43.511Z",
      temperature: 65,
      cn: {
        c: 96,
        n: 4,
      },
    },
  ];

  return dataReport;
}
