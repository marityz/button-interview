import './App.css';
import Button from "./containers/Button/Button";
import {connect} from 'react-redux';
import {mapStateToProps, saveDispatchToProps} from "./store/store";
import { socket_init } from './socket-api/socket-api.js';
const WrappedButton = connect(mapStateToProps, saveDispatchToProps)(Button);

function App() {
    return (
        <div className='app'>
            <WrappedButton />
        </div>
    )
}

export default App;

socket_init();
