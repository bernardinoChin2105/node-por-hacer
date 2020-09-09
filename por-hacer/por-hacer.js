const fs = require('fs');
const colors = require('colors/safe');
const { clearScreenDown } = require('readline');
const { completion } = require('yargs');

let listadoPorHacer=[];

const guardarDB = () => {
        

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (error)=>{

        if (error){
            console.log(object);
            return;
        }          
        
        console.log('Información almacenada exitosamente');
            
    });

};

const cargarDB = ()=>{

    try {
        listadoPorHacer = require('../db/data.json');   
    } catch (error) {
        listadoPorHacer=[];
    }    

};

const crear = (descripcion=>{
    
    cargarDB();
    let porHacer= {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);    
    guardarDB();
    return porHacer;    

});

const listar = ()=>{

    cargarDB();

    listadoPorHacer.map(x=>{        
        console.log(colors.green('========POR HACER========'));
        console.log(x.descripcion);
        console.log(`Estado: ${x.completado}`);
        console.log(colors.green('========================='));
    });

};

const actualizar = (descripcion, completado=true)=>{

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index>=0)
    {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }    
    else
    {
        return false;
    }

};

const borrar = (descripcion) => {
    
    cargarDB();

    let listado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listado.length === listadoPorHacer.length) {
        return false;
    }
    else{
        listadoPorHacer= listado;
        guardarDB();
        return true;
    }
    
};

module.exports={
    crear,
    listar,
    actualizar,
    borrar
};