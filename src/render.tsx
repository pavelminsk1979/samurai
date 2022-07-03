import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {changeTextarea, creatingMessage, StateType} from './State'


export const renderingState = (state:StateType) => {

    ReactDOM.render(
        <App
            valueTaxtarea={state.stateTextarea}
            changeTextarea={changeTextarea}
            state={state}
             creatingMessage={creatingMessage}
        />,
        document.getElementById('root')
    );
}
