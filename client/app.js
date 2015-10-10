require('bootstrap-webpack');
var React = require('react');
var ReactDOM = require('react-dom');
var Root = require('./root.jsx');
import { Router, Route, Link } from 'react-router'



 ReactDOM.render(
   <Router>
    <Route path="/" component={Root}>
    </Route>
   </Router>,
   document.getElementById('body')
 )
