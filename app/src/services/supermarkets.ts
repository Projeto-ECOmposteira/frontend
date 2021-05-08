import { SupermarketReportProps, WarningProps } from "../types/types";
import api from "../services/api";

export async function getSupermarkets(): Promise<Array<SupermarketReportProps>> {
  let url = '/api/get_producer_supermarket/'

  let supermarkets: Array<SupermarketReportProps> = []

  try {
    let request = await api.get(url)
    request.data.forEach((supermarket: any) => {
      supermarkets.push({
        pk: supermarket.pk,
        email: supermarket.email,
        owner_name: supermarket.first_name + ' ' + supermarket.last_name,
        comercial_name: supermarket.comercial_name,
      })
    });
  }
  catch {
    supermarkets = []
  }

  return supermarkets;
}
