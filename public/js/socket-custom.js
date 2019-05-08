var socket = io();

socket.on('connect', function() {

    console.log('conectado al servidor ');

});

socket.on('disconnect', function() {

    console.log('perdimos coneccion con el servidor');

});

//enviar informacion
socket.emit('enviarMensaje', {
        usuario: 'juan',
        mensaje: 'atrrrrrrrrrrrr'
    },
    function(resp) {
        console.log('respuesta servidor ', resp);
    });

//escuchar info

socket.on('enviarMensaje', function(mensaje) {

    console.log('servidor: ', mensaje);

})