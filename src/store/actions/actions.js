export const ACTION_CHANGE_STATE_BUTTON = "ACTION_CHANGE_STATE_BUTTON";

const onClickStateButton = (buttonState) => {
    return{
        type: ACTION_CHANGE_STATE_BUTTON,
        buttonState: buttonState,
    }
};


export default onClickStateButton;


