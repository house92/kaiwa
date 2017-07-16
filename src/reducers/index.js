import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { shows, show } from "./shows";
import { genres } from "./genres";
import { modal } from "./modals";
import { user } from "./users";

export default combineReducers({shows, show, genres, modal, user, routing: routerReducer});
