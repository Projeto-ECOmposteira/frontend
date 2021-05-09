import { ReportPageProps } from "../types/types";
import api from "./api";

export async function getReports(id: string): Promise<Array<ReportPageProps>> {
  let url = `/api/get_composter_report/${id}`

  let reports: Array<ReportPageProps> = []

  try {
    let request = await api.get(url)

    request.data.forEach((report: any) => {
      reports.push(report)
    });
  }
  catch {
    reports = []
  }

  return reports;
}
