import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./components/error/PageNotFound";
import Dashboard from "./components/Dashboard";

const App = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route component={PageNotFound} />
  </Switch>
);

export default App;
