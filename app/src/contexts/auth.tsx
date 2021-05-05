import { AsyncLocalStorage } from "node:async_hooks";
import React, { createContext, useEffect, useState } from "react";
import * as auth from "../services/auth";

interface AuthContextData {
  signed: boolean;
  user: Object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem('@RAuth:user');
      const storagedToken = localStorage.getItem('@RAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData();
  });

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    localStorage.setItem('@RAuth:user', JSON.stringify(response.user));
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
