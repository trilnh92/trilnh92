import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './assets/scss/main.scss';
import * as serviceWorker from './serviceWorker';
import RoutingConfig from "./routes/Routes";


ReactDOM.render(
    <RoutingConfig />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
