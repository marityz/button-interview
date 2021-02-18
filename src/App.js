import './App.css';
import Button from "./containers/Button/Button";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import onClickStateButton from '../src/store/actions/actions'

const mapStateToProps = (state) => {
    return {
        buttonState: state.buttonState,
    }
};

const saveDispatchToProps = (dispatch) => {
    return {
        setButtonState: bindActionCreators(onClickStateButton, dispatch)
    }

};


const WrappedButton = connect(mapStateToProps, saveDispatchToProps)(Button);

function App() {
    return (
        <div className='app'>
                <WrappedButton/>
        </div>
    )
}

export default App;

