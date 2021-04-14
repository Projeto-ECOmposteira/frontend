import { useContext } from "react";
import AuthContext from "./contexts/auth";
import InternalRoutes from "./routes/InternalRoutes";
import ExternalRoutes from "./routes/ExternalRoutes";

export default function Routes() {
  const { signed } = useContext(AuthContext);

  return (
    <>
      {signed ? (
        <InternalRoutes />
      ) : (
        <ExternalRoutes />
      )}
    </>
  )
}
