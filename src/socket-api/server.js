const http = require("http");
const express = require('express');
const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
});

const port = 8000;


let state = false;

io.listen(port);
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

    client.on('disconnect', () => {
        console.log("disconnect")
    })
});
