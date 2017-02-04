/*jshint esversion: 6 */
const express = require('express');
const server = require('../server');

const app = express();
const router = express.Router();

router.post('/', (req, res)=>{
  let message = req.body.string;

  message = message.replace("Selfie", "self-portrait");

  res.send(messages);
});

module.exports = router;