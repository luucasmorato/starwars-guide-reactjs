import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details" exact component={Details} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
