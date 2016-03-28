require('bootstrap-webpack');
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';
import { Router, Route, Link, hashHistory } from 'react-router'

 ReactDOM.render(
    <Router history={hashHistory}>  
        <Route path="/" component={Root}>
        </Route>
    </Router>,
   document.getElementById('body')
 )
