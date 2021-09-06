import { createStore, combineReducers, applyMiddleware,  } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/index";
import listReducer from "./redux/reducer";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    list: listReducer,
})

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;