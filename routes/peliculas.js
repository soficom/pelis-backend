const express = require('express');
const app = express();
const peliculasController = require('../controllers/peliculas');

app.get('/peliculas', peliculasController.all);

app.get('/peliculas/:id', peliculasController.byId);

app.post('/peliculas', peliculasController.create);

app.put('/peliculas/:id', peliculasController.update);

app.delete('/peliculas/:id', peliculasController.remove);

module.exports = app;