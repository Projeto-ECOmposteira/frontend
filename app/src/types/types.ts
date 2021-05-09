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

export interface WarningProps {
  composterId: string;
  composterName: string;
  description: string;
  startTimestamp: string;
}

export interface SupermarketReportProps {
  pk: number;
  email: string;
  owner_name: string;
  comercial_name: string;
}

export interface base64ImageProps {
  base64Image: string;
  filename: string;
}

export interface SendGenericMailProps {
  user: string;
  to: string;
  subject: string;
  message: string;
  images: Array<base64ImageProps>;
}
