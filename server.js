const express = require('express');
const app = express();

const mongoose = require('mongoose');

//configuracion de express que nos permite enviar y recibir info del tipo json en req y res.
app.use(express.json());

app.use(require('./controllers/peliculas.routes'));

mongoose.connect(
    "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.wojzg.mongodb.net/<DATABASE_NAME>",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err, res) => {
        if(err) {
            throw err;
        } else {
            console.log('Conexión a la Base de datos ONLINE establecida')
        }
    }
);

app.listen(3000,() => {
    console.log('servidor corriendo en el puerto 3000');
}); 
