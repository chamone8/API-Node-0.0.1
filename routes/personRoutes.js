var express = require('express');
const routes = express.Router();

const controller = require('../src/controller/personController');

routes.post('/', controller.post);
routes.put('/:id',controller.put);
routes.delete('/delete/:id',controller.delete);
module.exports = routes;