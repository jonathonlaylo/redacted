/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const appRoute = require('./route/app.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.send('hello world');
});

app.use('/', appRoute);

app.get('/', (req, res)=>{
  res.render('index');
});

module.exports = app;