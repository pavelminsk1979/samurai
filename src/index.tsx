
import {StateType, store} from "./State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export const renderingState = (state:StateType) => {

    ReactDOM.render(
        <App
            newMessageUserTextTexterea={state.newMessageUserText}
            valueTaxtarea={state.stateTextarea}
            dispatch={store.dispatch.bind(store)}
            state={state}

        />,
        document.getElementById('root')
    );
}

renderingState(store.getState());



store.subscribe(renderingState);
