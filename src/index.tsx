import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

// @ts-ignore
const myRouter = <BrowserRouter>
    <App />
</BrowserRouter>

ReactDOM.render(
    <Provider store={store}>
        {myRouter}
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
