import React, { createContext, useEffect, useState } from "react";
import * as auth from "../services/auth";
import api from "../services/api";
import { User } from "../types/types";
import { useSnackbar } from 'notistack';

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem('@RAuth:user');
      const storagedToken = localStorage.getItem('@RAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
    }

    loadStorageData();
  }, []);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  async function signIn(email: string, password: string) {
    let response = null
    try {
      response = await auth.signIn(email, password);
      console.log(response.data)
      let user = {
        'token': response.data.access,
        'data': {
          'name': response.data.user.name,
          'email': response.data.user.email,
          'isSupermarket': response.data.user.isSupermarket,
        }
      }
      setUser(user);

      api.defaults.headers.Authorization = `Bearer ${user.token}`;

      localStorage.setItem('@RAuth:user', JSON.stringify(user));
      localStorage.setItem('@RAuth:token', user.token);
    }
    catch {
      const key = enqueueSnackbar('E-mail ou senha incorreta.', {
        variant: 'error',
        preventDuplicate: true,
        onClick: () => { closeSnackbar(key) }
      });
    }
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@RAuth:user');
    localStorage.removeItem('@RAuth:token');
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
