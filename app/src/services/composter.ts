import { ComposterProps } from "../types/types";
import api from "../services/api";

export async function getComposters(isSupermarket : boolean | undefined): Promise<Array<ComposterProps>> {
  
  let url = (isSupermarket === false ? '/api/get_producer_composters/' : '/api/get_supermarket_composters/')

  let compostersArray: Array<ComposterProps> = []

  try {
    let request = await api.get(url)

    request.data.forEach((composters: Array<any>) => {
      for (let _comp in composters) {
        compostersArray.push({
          _id: composters[_comp]['_id'],
          peso: composters[_comp]['weight'] || 0,
          ph: composters[_comp]['ph'] || 0,
          cn: composters[_comp]['cn'] || 0,
          o2: composters[_comp]['oxigen'] || 0,
          temperatura: composters[_comp]['temperature'] || 0,
          pressao: composters[_comp]['pressure'] || 0,
          umidade: composters[_comp]['humidity'] || 0,
          co2: composters[_comp]['co2'] || 0,
          dataHoraMedida: composters[_comp]['timestamp'] || '-',
          macAddress: composters[_comp]['macAddress'],
          nome: composters[_comp]['name'],
          descricao: composters[_comp]['description'],
          status: 0,
          emailSupermercado: composters[_comp]['supermarketEmail'], 
          emailProdutorAgricola: ''
        })
      }
    });
  }
  catch {
    compostersArray = []
  }

  return compostersArray;
}
