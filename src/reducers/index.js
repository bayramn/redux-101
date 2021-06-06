import { combineReducers } from "redux";
import toDoReducer from "./toDo";
import loggedReducer from "./isLogged";

const reducers = combineReducers({
  todo: toDoReducer,
  isLogged: loggedReducer,
});

export default reducers;
