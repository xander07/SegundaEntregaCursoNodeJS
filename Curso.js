const fs = require('fs');

cursos = [];
inscritos = [];

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
        console.log('Archivo creado con éxito')
    })
}

let buscarCursoPorId = (id) => {
    listarCursos();
    let curso = cursos.find(curso1 => curso1.id == id);
    return curso;
};

let mostrarCursos = () => {
    listarCursos();
    if (cursos.length > 0) {
        let i = 0;
        cursos.forEach(function (curso) {
            if (curso.estado == 'Disponible') {
                console.log(
                    "El id del curso es: " + curso.id + '.\n' +
                    "El nombre del curso es: " + curso.nombre + '.\n' +
                    "La duración del curso es: " + curso.descripcion + ' horas.\n' +
                    "El costo del curso es: " + curso.precio + '.\n' +
                    "Estado actual: " + curso.estado + '.\n'
                )
                i = + 1;
            }
        })
        if (i == 0) {
            console.log('No hay cursos disponibles actualmente.')
        }
    } else {
        console.log('No hay cursos actualmente.')
    }
}


const createCurso = (curso) => {
    listarCursos();
    let nCurso = {
        id: curso.id,
        nombre: curso.nombre,
        descripcion: curso.descripcion,
        precio: curso.precio,
        modalidad: curso.modalidad,
        intensidad: curso.intensidad,
        estado: curso.estado
    };
    let duplicado = cursos.find(cur => cur.id == curso.id);
    if (!duplicado) {
        cursos.push(nCurso);

        guardarCurso();
    } else {
        console.log("El id ya pertenece a un curso");
    }
}

const updateCurso = (id, estado) => {
    let cursoExistente = buscarCursoPorId(id);
    if (cursoExistente) {
        cursoExistente.estado = estado
    } else {
        console.log('El id del curso ingresado no existe.');
    }
}

// Parte para aspirantes

const guardarInscrito = () => {
    let datos = JSON.stringify(inscritos);
    fs.writeFile('inscritos.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo creado con éxito')
    })
}

const listarInscritos = () => {
    try {
        inscritos = require('./inscritos.json');
    } catch (error) {
        inscritos = []
    }
}

const inscribirse = (datos) => {
    listarCursos();
    listarInscritos();
    let aux1 = {
        id: datos.id,
        docIdentidad: datos.docIdentidad,
        nombre: datos.nomAspirante,
        correo: datos.correo,
        telefono: datos.telefono
    }
    if (cursos.length >= 1) {
        let curso1 = cursos.find(cur => cur.id == datos.id);
        if (curso1) {
            let aux = inscritos.find(as => as.id == curso1.id);
            if (aux) {
                let duplicado = inscritos.find(as => as.docIdentidad == datos.docIdentidad);
                if (!duplicado) {
                    inscritos.push(aux1);
                    guardarInscrito();
                }
                else {
                    console.log('Ya te inscribiste previamente');
                }
            } else {
                inscritos.push(aux1);
                console.log(inscritos);
                guardarInscrito();
            }
        } else {
            console.log('No existe un curso con este ID');
        }
    } else {
        console.log("No hay cursos disponibles");
    }
}

const mostrarInscritos = (id) => {
    listarInscritos();
    let asp = inscritos.filter(ep => ep.id == id);
    if (asp) {
        console.log("Estos son los aspirantes: \n");
        asp.forEach(aux => {
            
            console.log("Documento: " + aux.docIdentidad );
            console.log("Nombre: " + aux.nombre );
            console.log("Correo: " + aux.correo );
            console.log("Telefono: " + aux.telefono + '\n');
        });
    } else {
        console.log("No hay cursos con este id");
    }
}

const eliminarInscrito = (id,doc) => {
    listarInscritos();
    let curso1 = inscritos.find(cur => cur.id == id);
    if(curso1){
        let asp = inscritos.find(aux => aux.docIdentidad == doc);
        if(asp){
            var i = inscritos.indexOf(asp);
            inscritos.splice(i,1);
            guardarInscrito();
            setTimeout(function() {mostrarInscritos(id)},2000);
        } else {
            console.log("El documento ingresado no pertenece a un aspirante de este curso");
        }
    } else {
        console.log("No hay un curso con este id");
    }
}

module.exports = {
    createCurso,
    buscarCursoPorId,
    updateCurso,
    mostrarCursos,
    listarCursos,
    inscribirse,
    mostrarInscritos,
    eliminarInscrito
};