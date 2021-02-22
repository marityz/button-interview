const http = require("http");
const express = require('express');
const app = express();


const port = 8000;


const server = http.createServer(app).listen(port, "0.0.0.0");

const io = require('socket.io')(server, {
    cors: {
        origin:'*',
        credentials: true
    }
});





let state = false;

console.log('listening on port ', port);


io.on('connection', (client) => {
    client.on('postState', (isState, callback) => {
        state = isState;
        callback({
            state
        });
        client.broadcast.emit('getStateButton', state);
    });

    client.emit('getStateButton', state);

    client.on('disconnect', ()=>{
        console.log("disconnect")
    })
});
