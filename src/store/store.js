import {bindActionCreators, createStore} from "redux";
import reducer from "./reducers/reducer";
import {onClickStateButton} from "./actions/actions";

const store = createStore(reducer);

export default store;

export const mapStateToProps = (state) => {
    return {
        buttonState: state.buttonState,
    }
};

export const saveDispatchToProps = (dispatch) => {
    return {
        setButtonState: bindActionCreators(onClickStateButton, dispatch)
    }

};

