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

const crearCurso = {
    id,
    nombre,
    descripcion,
    precio,
    modalidad,
    intensidad,
    estado
}

const docIdentidad = {
    demand: true,
    alias: 'c'
}

const nomAspirante = {
    demand: true,
    alias: 'na'
}

const correo = {
    demand: true,
    alias: 'em'
}

const telefono = {
    demand: true,
    alias: 'tel'
}

const inscribir = {
    id,
    docIdentidad,
    nomAspirante,
    correo,
    telefono
}

const mostrarInsc = {
    id
}

const eliminar = {
    id,
    docIdentidad
}

const argv = require('yargs')
            .command('crear', 'Vista de coordinador',crearCurso)
            .command('ver','vista del interesado')
            .command('actualizar','vista del aspirante')
            .command('inscribir','Inscribe un aspirante en un curso', inscribir)
            .command('mostrar','muestra los aspirantes a un curso', mostrarInsc)
            .command('eliminar','eliminar un aspirante',eliminar)
            .argv

module.exports = {argv}