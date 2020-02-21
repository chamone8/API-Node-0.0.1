const express = require('express');
const routes = express.Router();
 routes.get("/", function(req,res,next){
    res.status(200).send(
     {
      title:'API',
      version: '0.0.1'
     }
    );
 });

 module.exports = routes;