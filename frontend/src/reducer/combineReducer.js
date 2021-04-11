import { combineReducers } from "redux";
import Users from "./userreducer";
import lists from './listreducer'

const reducer = combineReducers({
  Users,
  lists

});

export default reducer;
