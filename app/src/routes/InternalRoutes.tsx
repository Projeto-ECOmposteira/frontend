import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AllowedProducts from "../pages/AllowedProducts";
import Composters from "../pages/Home";
import Reports from "../pages/Reports";
import Supermarkets from "../pages/Supermarkets";
import Warnings from "../pages/Warnings";

export default function  InternalRoutes() {
  return (
    <Switch>
      <Route path="/home" component={Composters} />
      <Route path="/warnings" component={Warnings} />
      <Route path="/reports" component={Reports} />
      <Route path="/supermarkets" component={Supermarkets} />
      <Route path="/allowed-products" component={AllowedProducts} />

      <Redirect from="/" to="/home" />
    </Switch>
  );
}
