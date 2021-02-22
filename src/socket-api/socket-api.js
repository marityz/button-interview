import openSocket from 'socket.io-client';

function addHref() {
    const href = document.location.href;
    return href.slice(0, -5) + '8000';

}

const socket = openSocket(addHref());

export default socket;

export function socket_init() {
    console.log('connected to socket')
}
