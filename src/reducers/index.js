import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { shows, show } from "./shows";
import { genres } from "./genres";

export default combineReducers({shows, show, genres, routing: routerReducer});
