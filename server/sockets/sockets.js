const { io } = require('../server');

//detectar la coneccion desde el frontend
io.on('connection', (client) => {

    console.log('usuario Conectado');


    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'hola'
    })

    client.on('disconnect', () => {

        console.log('usuario Desconectado');

    });

    client.on('enviarMensaje', (mensaje, callback) => {

        console.log(mensaje);

        client.broadcast.emit('enviarMensaje', mensaje);

        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'todo salio mal'
        //     })
        // }
    });
})