import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateReduxStorType, store} from "./redux/reduser/reduxStor";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



export const renderingState = (state:StateReduxStorType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App
                newMessageForState={state.dialogsMessageUser.newMessageForState}
                newPost={state.profilePost.newPost}
                dispatch={store.dispatch}
                state={state}
            />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}



store.subscribe(() => renderingState(store.getState()))
renderingState(store.getState());
