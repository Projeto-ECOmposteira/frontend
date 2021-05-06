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