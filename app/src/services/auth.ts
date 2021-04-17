interface Response {
  access: string;
  refresh: string;
  user: {
    name: string;
    email: string;
    isSupermarket: boolean;
  };
}

export function signIn(): Response {
  return {
    access: "jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3",
    refresh: "jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3",
    user: {
      name: "Welison Almeida",
      email: "welison.almeida.923@gmail.com",
      isSupermarket: false,
    },
  };
}
