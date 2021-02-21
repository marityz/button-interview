import React, {useEffect} from 'react';
import './Button.css';
import socket from '../../socket-api/socket-api';


export default function Button(props) {
    const {buttonState, setButtonState} = props;
    const value = `${buttonState ? 'ON' : 'OFF'}`;


    function sendState() {
        const state = !buttonState;
        socket.emit('postState', {state}, (state) => {
            setButtonState(state.state.state)
        });
    };

    useEffect(() => {
        socket.on('getStateButton', function (state) {
            setButtonState(state.state);
        })
    }, []);


    return (
        <>
            <input type="submit" value={value} className={buttonState ? "button button_on" : "button"}
                   onClick={() => sendState()}/>
        </>
    )


};



