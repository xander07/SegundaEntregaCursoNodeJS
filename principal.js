const curso = require('./Curso');
const {argv} = require('./yargs');

let comando = argv._[0];



switch(comando){
    case comando = 'crear':
    curso.createCurso(argv);
    break

    case comando = 'ver':
    curso.mostrarCursos();
    break

    case comando = 'inscribir':
    curso.inscribirse(argv);
    break

    case comando = 'mostrar':
    curso.mostrarInscritos(argv.id);
    break

    case comando = 'eliminar':
    curso.eliminarInscrito(argv.id,argv.docIdentidad);
    break
}