const express = require('express');
const funciones = require('../funciones/funciones');
const app = express();

//endpoint para obtener peliculas 
app.get('/peliculas',function (req, res){
    if(req.query.nombre != undefined){
        res.send(funciones.obtenerPeliculasPorNombre(req.query.nombre));
    }else{
        res.send(funciones.obtenerPeliculas());
    }
});

// endpoint para obtener peliculas retro
app.get('/peliculas/retro', function (req, res){
    res.send(funciones.obtenerPeliculasReto());
});

//endpoint para obtener informacion de una pelicula en especifico 
app.get('/pelicula/:id', (req,res) => {
    let id = req.params.id;
    funciones.obtenerPeliculasPorId(id)
    .then((peli) => {
        res.send(peli);
    }).catch((err)=>{
        res.send(err);
    })
});

//endpoint para crear una pelicula 
app.post('/pelicula', function(req, res){
    let peli = req.body;
    funciones.registrarPelicula(peli);
    let id = funciones.registrarPelicula(peli);
    res.send(id);
});

//endpoint para modificar una pelicula
app.put('/pelicula/:id', function(req,res){
    let respuesta = {
        id: req.params.id,
        body: req.body,
    };
    res.send(respuesta);
});

//Endpoint para borrar una pelicula 
app.delete('/pelicula/:id', function(req,res){
    res.send(funciones.borrarPelicula(req.params.id));
});

module.exports = app;