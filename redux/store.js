import { createStore, combineReducers } from "redux";
import loginReducer from '../redux/reducer';

const rootReducer = combineReducers({
  loginReducer: loginReducer,
});

export const store = createStore(rootReducer);