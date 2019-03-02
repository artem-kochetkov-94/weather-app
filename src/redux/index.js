import { combineReducers } from "redux";
import countries from "./ducks/countries";
import cities from "./ducks/cities";
import weather from "./ducks/weather";

const rootReducer = combineReducers({ countries, cities, weather });

export default rootReducer;
