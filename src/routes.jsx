import React from "react";
import { Route, IndexRoute } from "react-router";
import Layout from "./components/layout";
import Home from "./components/home";
import Shows from "./components/shows";

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="shows" component={Shows}/>
  </Route>
);

export default routes;
