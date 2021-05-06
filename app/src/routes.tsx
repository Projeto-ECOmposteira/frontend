import { useContext } from "react";
import AuthContext from "./contexts/auth";
import Navbar from "./components/Navbar";
import InternalRoutes from "./routes/InternalRoutes";
import ExternalRoutes from "./routes/ExternalRoutes";


export default function Routes() {
  const { signed } = useContext(AuthContext);

  return (
    <>
      {signed ? (
        <>
          <Navbar />
          <InternalRoutes />
        </>
      ) : (
        <ExternalRoutes />
      )}
    </>
  );
}
