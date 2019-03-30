const fs = require('fs');
const curso = require('./Curso');
cursos =[];

const listarCursos = () => {
    try {
        cursos = require('./cursos.json');
    }catch(error){
        cursos = []
    }
}

inscritos = [];

const guardarInscrito = () => {
    let datos = JSON.stringify(inscritos);
    fs.writeFile('inscritos.json', datos, (err)=>{
        if(err) throw(err);
        console.log('Archivo creado con éxito')
    })
}

const listarInscritos = () => {
    try {
        inscritos = require('./inscritos.json');
    }catch(error){
        inscritos = []
    }
}

const buscarInscrito = ( idCurso, docInt) => {
    listarInscritos();
    inscritos.forEach(ins => {
        if(ins.id==idCurso){
            if(ins.docIdentidad == docInt){
                return ins
            }
        }
    });
}

const crear = (datos) => {
    listarCursos();
    let inscrito = {
        id : datos.id,
        docIdentidad: datos.id,
        nombre: datos.nomAspirante,
        correo: datos.correo,
        telefono: datos.telefono
    }
    if(cursos.length > 0){
        let curso1 = curso.buscarCursoPorId(datos.id);
        if(curso1){
            let duplicado = buscarInscrito(datos.id,datos.docIdentidad);
            if(!duplicado){
                inscritos.push(inscrito);
                console.log(inscritos);
                guardarInscrito();
            }
            else {
                console.log('Ya te inscribiste previamente');
            }
        } else {
            console.log('No existe un curso con este ID');
        }
    }
}

module.exports = {
    crear
}