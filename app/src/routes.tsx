import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SupermarketRegister from "./pages/SupermarketRegister";
import SupermarketRegisterSuccess from "./pages/SupermarketRegisterSuccess";
import { useContext } from "react";
import AuthContext from "./contexts/auth";
import PasswordRecovery from "./pages/PasswordRecovery";
import PasswordRecoverySuccess from "./pages/PasswordRecoverySuccess";
import PasswordRecoveryReset from "./pages/PasswordRecoveryReset";
import PasswordRecoveryResetSuccess from "./pages/PasswordRecoveryResetSuccess";

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
      <Route path="/esqueceu_senha" exact component={PasswordRecovery} />
      <Route path="/esqueceu_senha/success" exact component={PasswordRecoverySuccess} />
      <Route path="/esqueceu_senha/reset/:user/:token" exact component={PasswordRecoveryReset} />
      <Route path="/esqueceu_senha/reset/success" exact component={PasswordRecoveryResetSuccess} />
    </Switch>
  );
}
