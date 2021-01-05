const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify( listadoPorHacer );
    fs.writeFileSync( 'db/data.json', data, (err) => {
        if (err) throw new Error( 'No se pudo guardar data.json' )
    } );
};

const cargarDB = () => {
    try {
        listadoPorHacer = require( '../db/data.json' );           
    } catch (error) {
        listadoPorHacer = [];        
    }
    return listadoPorHacer;
}

const getListado = () => {
    return cargarDB();
}

const crear = ( descripcion ) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push( porHacer );
    guardarDB();

    return porHacer;
};

const actualizar = ( tareaName, valor ) => {
    const tareaEncontrada = listadoPorHacer.find( ( tarea ) => {
        return ( tarea.descripcion === tareaName );
    })

    if (!tareaEncontrada ) {
        console.log('Tarea no existe');
        return false;
    } else {
        tareaEncontrada.completado = ( String( true ) == valor );
        guardarDB();
        return true;
    }
};

const borrar = ( tareaName ) => {
    const tareasEncontradas = listadoPorHacer.filter( ( tarea ) => {
        return ( tarea.descripcion !== tareaName );
    })

    if ( tareasEncontradas.length == listadoPorHacer.length ) {
        console.log('Tarea no existe');
        return false;
    } else {
        listadoPorHacer = tareasEncontradas;
        guardarDB();
        return true;
    }
};


module.exports = {
    actualizar,
    borrar,
    crear,
    cargarDB,
    getListado
}


