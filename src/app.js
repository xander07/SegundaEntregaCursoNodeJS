const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./helpers');

const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname,'../partials');
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine','hbs');

app.get('/',(req,res) => {
    res.render('index');
});

app.get('/crear_curso',(req,res) => {
    res.render('crear');
});

app.post('/crear_curso',(req,res) => {
    res.render('crear',{
        id: parseInt(req.body.id),
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: parseInt(req.body.precio),
        modalidad: req.body.modalidad,
        intensidad: parseInt(req.body.intensidad)
    });
});

app.get('/verCursos',(req,res) => {
    res.render('ver');
});

app.listen(3000, () => {

    console.log("escuchando en el puerto 3000");
});