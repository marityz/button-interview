import React from 'react';
import './Button.css';


export default function Button(props) {
    const { buttonState, setButtonState} = props;
    const value = `${buttonState ? 'ON' : 'OFF'}`;




    return (
        <>
            <input type="submit" value={value} className={buttonState? "button button_on" : "button"}
                   onClick={()=> setButtonState(!buttonState)}/>
        </>
    )


};
