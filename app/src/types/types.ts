export interface User {
  token: string;
  data: {
    name: string;
    email: string;
    isSupermarket: boolean;
  };
}

export interface MaterialProps {
  _id: string;
  name: string;
  imageLink: string;
  materialType: string;
}

export interface ComposterProps {
  _id: string;
  peso: number;
  ph: number;
  cn: number;
  o2: number;
  temperatura: number;
  pressao: number;
  umidade: number;
  co2: number;
  dataHoraMedida: string;
  macAddress: string;
  nome: string;
  descricao: string;
  status: number;
  emailSupermercado: string;
  emailProdutorAgricola: string;
}
