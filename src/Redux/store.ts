// import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import thunk from "redux-thunk";
// import {reducer as AppReducer} from "./AppReducer/reducer";
// import {reducer as AuthReducer} from "./AuthReducer/reducer";

// const reducer=combineReducers({AppReducer,AuthReducer})
// export const store=legacy_createStore(reducer,applyMiddleware(thunk));

import { applyMiddleware, combineReducers,  legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as AppReducer } from "./AppReducer/reducer";
import {reducer as AuthReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({
  AppReducer,
  AuthReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer,  applyMiddleware(thunk));









// export type AppState = ReturnType<typeof reducer>;


// import thunk from "redux-thunk";
// import {AppReducer, AuthReducer} from "./AppReducer/reducer";

// const reducer=combineReducers({AppReducer,AuthReducer})
// export type AppState = ReturnType<typeof reducer>;
// export const store=createStore(reducer,applyMiddleware(thunk));
// import { applyMiddleware, combineReducers, legacy_createStore, Store } from "redux";
// import thunk from "redux-thunk";
// import {  reducer as AppReducer } from "./AppReducer/reducer";
// import {  reducer as AuthReducer } from "./AuthReducer/reducer";
// const reducer = combineReducers({ AppReducer, AuthReducer });

// export const store: Store = legacy_createStore(reducer, applyMiddleware(thunk));