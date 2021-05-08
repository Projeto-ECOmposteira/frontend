import { WarningProps } from "../types/types";
import api from "../services/api";

export async function getWarnings(): Promise<Array<WarningProps>> {
  let url = '/api/get_composter_alerts/'

  let warnings: Array<WarningProps> = []

  try {
    let request = await api.get(url)

    request.data.forEach((composters: Array<any>) => {
      for (let alert in composters) {
        warnings.push({
          composterId: composters[alert]['composter']['_id'],
          composterName: composters[alert]['composter']['name'],
          description: composters[alert]['description'],
          startTimestamp: composters[alert]['initDate'],
        })
      }
    });
  }
  catch {
    warnings = []
  }

  return warnings;
}
