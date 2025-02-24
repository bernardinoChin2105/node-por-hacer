const { argv } = require('./config/yargs');
const  porHacer  = require('./por-hacer/por-hacer');

let option=argv._[0];

switch (option){
    case 'listar': 
        porHacer.listar();                 
        break;
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break; 
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}