import { combineReducers } from "redux";
import countries from "./ducks/countries";
import cities from "./ducks/cities";

const rootReducer = combineReducers({ countries, cities });

export default rootReducer;
