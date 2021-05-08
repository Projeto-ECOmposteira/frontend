import { ComposterProps } from "../types/types";

export function getComposters(): Array<ComposterProps> {
  const composters = [
    {
      _id: "123123",
      peso: 70,
      ph: 6.5,
      cn: 20,
      o2: 10,
      temperatura: 28,
      pressao: 1020,
      umidade: 15,
      co2: 415,
      dataHoraMedida: "2012-04-23T18:25:43.511Z",
      macAddress: "FF:FF:FF:FF:FF:FF",
      nome: "Composteira 1",
      descricao:
        "Composteira situada no patio superior do supermercado Dona de Casa sob responsabilidade do fiscal de qualidade de produtos do estabelecimento",
      status: 0,
      emailSupermercado: "a@a.com",
      emailProdutorAgricola: "b@b.com",
    },
    {
      _id: "123124",
      peso: 320,
      ph: 7.2,
      cn: 18,
      o2: 11,
      temperatura: 68,
      pressao: 1050,
      umidade: 30,
      co2: 411,
      dataHoraMedida: "2012-04-23T18:25:43.511Z",
      macAddress: "AA:AA:AA:AA:AA:AA",
      nome: "Composteira 2",
      descricao:
        "Composteira situada no patio superior do supermercado Dona de Casa sob responsabilidade do fiscal de qualidade de produtos do estabelecimento",
      status: 1,
      emailSupermercado: "a@a.com",
      emailProdutorAgricola: "b@b.com",
    },
    {
      _id: "123125",
      peso: 440,
      ph: 8.2,
      cn: 20,
      o2: 13,
      temperatura: 28,
      pressao: 1020,
      umidade: 15,
      co2: 420,
      dataHoraMedida: "2012-04-23T18:25:43.511Z",
      macAddress: "AA:AA:AA:AA:AA:AA",
      nome: "Composteira 3",
      descricao:
        "Composteira situada no patio superior do supermercado Dona de Casa sob responsabilidade do fiscal de qualidade de produtos do estabelecimento",
      status: 2,
      emailSupermercado: "a@a.com",
      emailProdutorAgricola: "b@b.com",
    },
  ];

  return composters;
}
