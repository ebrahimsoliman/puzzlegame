import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './reducers';
import thunk from "redux-thunk";

const initialState = {};
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        // I require this only in dev environment
        const {composeWithDevTools} = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([thunk])
);

export default store;
