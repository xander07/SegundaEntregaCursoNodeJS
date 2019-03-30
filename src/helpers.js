const hbs = require('hbs');
const fs = require('fs');

cursos = [];

const listarCursos = () => {
    try {
        cursos = require('./cursos.json');
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


hbs.registerHelper('crearCurso',(id,nombre,descripcion,precio,modalidad = '',intensidad = '',estado = 'Disponible') => {
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
    let duplicado = cursos.find(cur => cur.id == curso.id);
    if (!duplicado) {
        cursos.push(nCurso);
        guardarCurso();
    } else {
        console.log("El id ya pertenece a un curso");
    }
});