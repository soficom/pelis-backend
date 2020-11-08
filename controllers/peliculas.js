const Pelicula = require('../models/pelicula');

const peliculasController = {
    all(req, res) {
        Pelicula.find((err, data) => {
            if (err) {
                return res.status(400).json({
                    status: 'ERROR',
                    mensaje: err,
                });
            }
            res.json({
                status: 'OK',
                data: data,
            });
        });
    },
    byId(req, res) {
        var id = req.params.id;
        Pelicula.findOne({ imdbID: id }, (err, data) => {
            if (err) {
                return res.status(400).json({
                    status: 'ERROR',
                    mensaje: err,
                });
            }
            res.json({
                status: 'OK',
                data: data,
            });
        });
    },
    create(req, res) {
        let body = req.body;
        let pelicula = new Pelicula({
            Titulo: body.Titulo,
            Genero: body.Genero,
            Descripcion: body.Descripcion,
            Calificacion: body.Calificacion,
            imdbID: body.imdbID,
        });

        pelicula.save((err, peliDB) => {
            if (err) {
                return res.status(400).json({
                    status: 'ERROR',
                    mensaje: err,
                });
            }

            res.json({
                status: 'OK',
                pelicula: peliDB,
            });
        });
    },
    update(req, res) {
        var id = req.params.id;
        var toUpdate = req.body;

        Pelicula.findOneAndUpdate(
            { imdbID: id },
            toUpdate,
            { new: true },
            (err, peliDB) => {
                if (err) {
                    return res.status(400).json({
                        status: 'ERROR',
                        mensaje: err,
                    });
                }
                res.json({
                    status: 'OK',
                    pelicula: peliDB,
                });
            }
        );
    },
    remove(req, res) {
        var id = req.params.id;
        Pelicula.findOneAndRemove({ imdbID: id }, (err) => {
            if (err) {
                return res.status(400).json({
                    status: 'ERROR',
                    mensaje: err,
                });
            }
            res.status(204).json({
                status: 'OK',
            });
        });
    }
};

module.exports = peliculasController;