import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function InternalRoutes() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
    </Switch>
  );
}
