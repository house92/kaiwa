import React, { Component } from "react";
import { Router } from "react-router";
import { Provider } from "react-redux";
import routes from "../routes";
import { history, store } from "../store";

export default class AppRoutes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
      </Provider>
    );
  }
}
