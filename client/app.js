require('bootstrap-webpack');
var React = require('react');
var ReactDOM = require('react-dom');
// var argh = require('./second.js');
var Root = require('./root.jsx');


 ReactDOM.render(
   <Root />,
   document.getElementById('body')
 )
// argh();
