const hbs = require('hbs');
const fs = require('fs');

cursos = [];

const listarCursos = () => {
    try {
        cursos = require('../cursos.json');
    } catch (error) {
        cursos = []
    }
}

const guardarCurso = () => {
    let datos = JSON.stringify(cursos);
    fs.writeFile('cursos.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo creado con éxito');
    });
}


hbs.registerHelper('crearCurso', (id, nombre, descripcion, precio, modalidad = '', intensidad = '', estado = 'Disponible') => {
    listarCursos();
    let nCurso = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        modalidad: modalidad,
        intensidad: intensidad,
        estado: estado
    };
     console.log(nCurso);
    let duplicado = cursos.find(cur => cur.id == nCurso.id);
    if (!duplicado) {
        cursos.push(nCurso);
        guardarCurso();
    } else {
        console.log("El id ya pertenece a un curso");
    }
});

hbs.registerHelper('listar', () => {
    listaCursos = require('../cursos.json');
    let cursos = listaCursos.filter(cur => cur.estado == 'Disponible');
    if (cursos.length > 0) {
        let texto = "<table>\
                <thead>\
                <th>ID</th>\
                <th>Nombre</th>\
                <th>Descripcion</th>\
                <th>Precio</th>\
                <th>Modalidad</th>\
                <th>Intensidad Horaria </th>\
                <thead>\
                <tbody>";

        cursos.forEach(curso => {
            texto = texto +
                '<tr>' +
                '<td>' + curso.id + '</td>' +
                '<td>' + curso.nombre + '</td>' +
                '<td>' + curso.descripcion + '</td>' +
                '<td>' + curso.precio + '</td>' +
                '<td>' + curso.modalidad + '</td>' +
                '<td>' + curso.intensidad + '</td>';

        });

        texto = texto + '</tbody></table>';
        return texto;
    } else {
        texto = '<h1> NO HAY CURSOS DISPONIBLES </h1>';
        return texto;
    }
})