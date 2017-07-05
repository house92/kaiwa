import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import rootReducer from "./reducers/index";

const defaultState = {
    shows: []
};

export const store = compose(applyMiddleware(thunk))(createStore)(rootReducer, defaultState);

let localHistory = {};
if (browserHistory) {
    localHistory = syncHistoryWithStore(browserHistory, store);
}

export const history = localHistory;
