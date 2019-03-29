const express = require('express')
const app = express();
const fs = require('fs');
const { argv } = require('./Curso');
const { argv } = require('./Usuario');
const curso = require('./Curso');


let comando = argv._[0];

if(comando == 'crear'){
    
}

switch(comando){
    case comando = 'crear':
        curso.createCurso(argv);
    case comando = 'actualizar':
        curso.updateCurso(argv);
}