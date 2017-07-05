import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { shows } from "./shows";

export default combineReducers({shows, routing: routerReducer});
