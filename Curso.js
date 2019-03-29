cursos =[];

const inscritos = [];

const id = {
    demand: true,
    alias: 'i'
}
const nombre = {
    demand: true,
    alias: 'n'
}
const descripcion = {
    demand: true,
    alias: 'd'
}
const precio = {
    demand: true,
    alias: 'p'
}
const modalidad = {
    default : 'Sin definir',
    alias : 'm'
}
const intensidad = {
    default : 'Sin definir',
    alias : 'ih'
}
const estado = {
    default: 'Disponible',
    alias: 'e'
}

const curso = {
    id,
    nombre,
    descripcion,
    precio,
    modalidad,
    intensidad,
    estado,
    inscritos
}


let buscarCursoPorId = (id) => {
    let curso = cursos.find(curso1 => curso1.id == id);
    return curso;
};

let mostrarCursos = () => {
    if(cursos.length > 0){
        let i = 0;
        cursos.forEach (function(curso){
            if(curso.estado == 'Disponible'){
                console.log(
                    "El id del curso es: "+ curso.id +'.\n'+
                    "El nombre del curso es: "+ curso.nombre +'.\n'+
                    "La duración del curso es: "+ curso.descripcion +' horas.\n'+
                    "El costo del curso es: "+ curso.precio +'.\n'+
                    "Estado actual: "+ curso.estado +'.\n'
                )
                i =+ 1;
            }        
        })
        if (i == 0){
            console.log('No hay cursos disponibles actualmente.')
        }
    }else{
        console.log('No hay cursos actualmente.')
    }
}


const argv = require('yargs')
    .command('crear', 'Crear un usuario', curso)
    .argv;

const createCurso = (cur) => {
    let cursoExistente = buscarCursoPorId(cur.id)
    if(!cursoExistente){
        let curso1 = {
            id: cur.id,
            nombre: cur.nombre,
            descripcion: cur.descripcion,
            precio: cur.precio,
            estado: cur.estado
        }
        cursos.push(curso1);
        mostrarCursos()
    }else{
        console.log('El id del curso ya existe.')
    }
}

const updateCurso = (id, nombre, descripcion, precio, modalidad, intensidad, estado,) => {
    let cursoExistente = buscarCursoPorId(id);
    if (cursoExistente) {
        cursoExistente.nombre = nombre,
        cursoExistente.descripcion = descripcion,
        cursoExistente.precio = precio,
        cursoExistente.modalidad = modalidad,
        cursoExistente.intensidad = intensidad,
        cursoExistente.estado = estado
    }else{
        console.log('El id del curso ingresado no existe.');
    }
}

module.exports = {
    cursos,
    argv,
    createCurso,
    buscarCursoPorId,
    updateCurso
};