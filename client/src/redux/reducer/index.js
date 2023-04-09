import { combineReducers } from "redux";
import { getData } from "./getDataReducer";

export const rootReducer = combineReducers({
  getData,
});
