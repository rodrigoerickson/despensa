import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import App from './App';
import Report from './components/report/report'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Link to="/">App</Link> | 
        <Link to="/relatorio"> Relatório</Link>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/relatorio" component={Report} />
        </Switch>
    </ BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
