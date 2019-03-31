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
        let texto = '<h1>Fue creado con éxito</h1>';
        return texto;
    } else {
        let texto = '<h1>El id ya pertenece a un curso</h1>';
        return texto;
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
                </thead>\
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
});

hbs.registerHelper('listarInscritos', () => {
    listaAspirantes = require('../inscritos.json');
    listaCursos = require('../cursos.json');
    if(listaAspirantes.length == 0){
        let texto = '<h1> No hay inscritos en ningun curso </h1>';
        return texto;
    } else {
        let texto = "<form action='/eliminarAsp' method='POST'>\
                    <table>\
                    <thead>\
                    <th> Nombre del curso</th>\
                    <th> Nombre del aspirante</th>\
                    <th> Documento del aspirante</th>\
                    <th> Correo del aspirante</th>\
                    <th> Telefono del aspirante</th>\
                    </thead>\
                    <tbody>";

        listaCursos.forEach(curso =>{
            let aspirante = listaAspirantes.filter(as => as.id == curso.id);
            if(!aspirante){
                texto = texto + '<h2> No hay aspirantes en este curso';
                return texto;
            } else {
                aspirante.forEach(asp => {
                    texto = texto +
                    '<tr>' +
                    '<td>' + curso.nombre + '</td>' +
                    '<td>' + asp.nombre + '</td>' +
                    '<td name="doc">' + asp.docIdentidad + '</td>' +
                    '<td>' + asp.correo + '</td>' +
                    '<td>' + asp.telefono + '</td>' +
                    '<td><button class="submit" name="id"' + 'value=' + curso.id + '>Eliminar</button></td>';
                });
            }
        });

        texto = texto + '</tbody></table></form>';
        return texto;
    }
});

hbs.registerHelper('eliminarAsp',(id,doc) => {
    console.log(id);
    console.log(doc);
})