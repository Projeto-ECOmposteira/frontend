import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SupermarketRegister from "./pages/SupermarketRegister";
import SupermarketRegisterSuccess from "./pages/SupermarketRegisterSuccess";
import { useContext } from "react";
import AuthContext from "./contexts/auth";

// TODO: criar pasta "routes" com dois componentes: 
// rotas autenticadas e rotas não autenticadas
export default function Routes() {
  const { signed } = useContext(AuthContext);

  return (
    <Switch>
      {signed ? (
        <Route path="/home" component={Home} />
      ) : (
        <Route path="/" exact component={SignIn} />
      )}
      <Route path="/cadastrar_supermercado" exact component={SupermarketRegister} />
      <Route path="/cadastrar_supermercado/success" exact component={SupermarketRegisterSuccess} />
    </Switch>
  );
}
