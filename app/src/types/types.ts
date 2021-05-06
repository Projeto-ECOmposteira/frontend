export interface User {
  token: string;
  data: {
    name: string;
    email: string;
    isSupermarket: boolean;
  };
}
