
import {StateType, store, StoreType} from "./State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export const renderingState = (state:StateType) => {

    ReactDOM.render(
        <App
            valueTaxtarea={state.stateTextarea}
            changeTextarea={store.changeTextarea.bind(store)}
            state={state}
            creatingMessage={store.creatingMessage.bind(store)}
        />,
        document.getElementById('root')
    );
}

renderingState(store.getState());



store.subscribe(renderingState);
