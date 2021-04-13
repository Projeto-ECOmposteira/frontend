import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
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
    </Switch>
  );
}
