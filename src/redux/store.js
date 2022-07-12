import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";


const middleware = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));