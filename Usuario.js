const curso = require('./Curso')

interesados = [];
aspirantes = [];
coordinadores = [];

const documento = {
    demand: true,
    alias: 'd',
}
const nombre = {
    demand: true,
    alias: 'n',
}
const correo = {
    demand: true,
    alias: 'c',
}
const telefono = {
    demand: true,
    alias: 't',
}
const roll = {
    alias: 'r',
}

const aspirante = {
    idCurso = {
        demand: true
    },
    documento,
    nombre,
    correo,
    telefono,
    roll: 'aspirante'
}

const argv = require('yargs')
    .command('inscribir', 'Crear un usuario', aspirante)
    .argv;

const buscarAspiranteEnCurso = (documento,idCurso) => {

}

const inscribirAspirante = (asp) => {
    let aspiranteInscrito = buscarAspiranteEnCurso(cur.id)
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
        console.log('El curso ya existe.')
    }
}

module.exports = {
    argv
};

/*
interesados: [
    {
        documento: 1234567890,
        nombre: 'Jhon Jairo Serna Córdoba',
        correo: 'jjsernaco@unal.edu.co',
        telefono: 3138895930,
        roll: 'Interesado'
    },
    {
        documento: 1234567890,
        nombre: 'Jhon Jairo Serna Córdoba',
        correo: 'jjsernaco@unal.edu.co',
        telefono: 3138895930,
        roll: 'Interesado'
    },
    {
        documento: 1234567890,
        nombre: 'Jhon Jairo Serna Córdoba',
        correo: 'jjsernaco@unal.edu.co',
        telefono: 3138895930,
        roll: 'Interesado'
    },
];

aspirantes: [
    {
        documento: 1234567890,
        nombre: 'Jhon Jairo Serna Córdoba',
        correo: 'jjsernaco@unal.edu.co',
        telefono: 3138895930,
        roll: 'Aspirante'
    },
    {
        documento: 1234567890,
        nombre: 'Jhon Jairo Serna Córdoba',
        correo: 'jjsernaco@unal.edu.co',
        telefono: 3138895930,
        roll: 'Aspirante'
    },
    {
        documento: 1234567890,
        nombre: 'Jhon Jairo Serna Córdoba',
        correo: 'jjsernaco@unal.edu.co',
        telefono: 3138895930,
        roll: 'Aspirante'
    },
];

coordinadores: [
    {
        documento: 1234567890,
        nombre: 'Jhon Jairo Serna Córdoba',
        correo: 'jjsernaco@unal.edu.co',
        telefono: 3138895930,
        roll: 'Coordinador de Educación Continua'
    },
    {
        documento: 1234567890,
        nombre: 'Jhon Jairo Serna Córdoba',
        correo: 'jjsernaco@unal.edu.co',
        telefono: 3138895930,
        roll: 'Coordinador de Educación Continua'
    },
    {
        documento: 1234567890,
        nombre: 'Jhon Jairo Serna Córdoba',
        correo: 'jjsernaco@unal.edu.co',
        telefono: 3138895930,
        roll: 'Coordinador de Educación Continua'
    },
]
*/