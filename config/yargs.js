const descripcion = {    
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
};

const completado = {    
    alias: 'c',
    demand: true            ,
    desc: 'Marca como completado o pendiente la tarea'
};

const { argv } = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea',{
        descripcion,
        completado
    })
    .command('listar', 'Listar las tareas.', {        
    })
    .command('borrar', 'Borrar una tarea.', {        
        descripcion
    })
    .help();

module.exports = {
    argv
};