import React, { useContext } from "react";
import AuthContext from "./contexts/auth";
import ExternalRoutes from "./routes/ExternalRoutes";
import Dashboard from "./pages/Dashboard";


export default function Routes() {
  const { signed } = useContext(AuthContext);

  return (
    <>
      {signed ? (
        <Dashboard />
      ) : (
        <ExternalRoutes />
      )}
    </>
  );
}
