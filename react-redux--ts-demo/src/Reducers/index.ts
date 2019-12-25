import { PersonReducer } from "./PersonReducer";
import { combineReducers } from "redux";



export const allReducers = combineReducers({
    persons: PersonReducer
  });
  