import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateReduxStorType, store} from "./redux/reduser/reduxStor";
import {Provider} from "react-redux";


export const renderingState = (state:StateReduxStorType) => {

    ReactDOM.render(
        <Provider store={store}>
            <App
                newDialogUser={state.dialogsMessageUser.newDialogUser}
                newPost={state.profilePost.newPost}
                dispatch={store.dispatch}
                state={state}
            />
        </Provider>,
        document.getElementById('root')
    );
}



store.subscribe(() => renderingState(store.getState()))
renderingState(store.getState());
