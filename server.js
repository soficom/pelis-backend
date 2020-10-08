const express = require('express');
const app = express();

//configuracion de express que nos permite enviar y recibir info del tipo json en req y res.
app.use(express.json());

app.use(require('./controllers/peliculas.routes'));

app.listen(3000,() => {
    console.log('servidor corriendo en el puerto 3000');
}); 
