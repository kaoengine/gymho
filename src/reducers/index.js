//contains all the reducers, each reducer updates a different part of the application state corresponding to dispatched action.

/**
 * Because we only have a single store in a Redux application
 * We use reducer composition instead of many stores to split data handling logic.
 */

import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";

export default combineReducers({
  auth,
  message,
});
