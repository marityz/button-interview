


export const ACTION_CHANGE_STATE_BUTTON = "ACTION_CHANGE_STATE_BUTTON";




export const onClickStateButton = (buttonState) => {

    return {
        type: ACTION_CHANGE_STATE_BUTTON,
        buttonState: buttonState,
    }
};
