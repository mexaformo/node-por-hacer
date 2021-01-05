const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
};

const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
};

const argv = require( 'yargs' )
                .command( 'crear', 'Crear una tarea.', optsCrear )
                .command( 'listar', 'Listar las tareas.' )
                .command( 'actualizar', 'Actualizar una tarea determinada.', optsActualizar )
                .help()
                .argv;


module.exports = { argv };