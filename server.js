/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/', (req, res)=>{
  res.render('index');
});

module.exports = app;