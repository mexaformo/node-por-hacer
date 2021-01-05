const argv      = require('./config/yargs').argv;
const colors    = require('colors');
const porHacer  = require( './por-hacer/por-hacer' );

// Lo primero que hay que hacer leer al archivo de configuración y cargar el arreglo.
console.log( porHacer.cargarDB() );


console.log( argv );

let comando = argv._[ 0 ];



switch ( comando ) {
    case 'crear':
        let tarea = porHacer.crear( argv.d );
    break;

    case 'listar':
        let listado = porHacer.getListado();
        listado.forEach(element => {
            console.log( '===== Por Hacer ======'.green );
            console.log( element.descripcion );
            console.log( 'Estado: ', element.completado );
            console.log( '======================'.green );
            console.log();
        });
        //console.log( listado );
    break;

    case 'actualizar':
        porHacer.actualizar( argv.d,argv.c );
        
    break;

    case 'borrar':
        porHacer.borrar( argv.d );
        break;


}
