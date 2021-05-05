import React, { createContext, useState } from "react";
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

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
