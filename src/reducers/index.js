import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { shows } from "./shows";
import { genres } from "./genres";

export default combineReducers({shows, genres, routing: routerReducer});
