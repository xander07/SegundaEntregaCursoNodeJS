const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./helpers');

const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname, '../partials');
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/crear_curso', (req, res) => {
    res.render('crear');
});

app.post('/crearCurso', (req, res) => {
    res.render('creado', {
        id: parseInt(req.body.id),
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: parseInt(req.body.precio),
        modalidad: req.body.modalidad,
        intensidad: parseInt(req.body.intensidad),
        estado: "Disponible"
    });
});

app.post('/eliminarAsp', (req, res) => {
    res.render('eliminarAsp', {
        id: parseInt(req.body.id),
        doc: parseInt(req.body.doc)
    });
});

app.get('/verCursos', (req, res) => {
    res.render('ver');
});

app.get('/VerInscritos', (req, res) => {
    res.render('verInscritos');
});

app.get('inscribirCurso', (req, res) => {
    res.render('inscribirCurso.hbs');
});

app.post('inscribir', (req, res) => {
    res.render('inscribir', {
        name: req.body.name,
        documento: req.body.doc,
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    });
});

app.listen(3000, () => {

    console.log("escuchando en el puerto 3000");
}); 