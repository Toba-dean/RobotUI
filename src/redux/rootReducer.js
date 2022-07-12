import { combineReducers } from "redux";
import { robotReducer, searchReducer } from "./robotRedux/reducer";

export default combineReducers({
  robot: robotReducer,
  search: searchReducer
});