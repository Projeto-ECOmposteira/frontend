import React, { createContext, useEffect, useState } from "react";
import * as auth from "../services/auth";
import api from "../services/api";
import { User } from "../types/types";

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(): Promise<void>;
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
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }
    }

    loadStorageData();
  });

  async function signIn() {
    const response = await auth.signIn();
    setUser(response);

    api.defaults.headers.Authorization = `Baerer ${response.token}`;

    localStorage.setItem('@RAuth:user', JSON.stringify(response));
    localStorage.setItem('@RAuth:token', response.token);
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
