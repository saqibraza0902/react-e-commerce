import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/tooplate-main.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux/Store'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'));