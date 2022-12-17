import React from 'react';
import st from './App.module.css'
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import ParticipantsContainer from "./components/Participants/ParticipantsContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {
    return (
        <div className={st.app}>
            <Header/>
            <NavBar/>
            <div className={st.content}>
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer/>}/>
                <Route
                    path='/profile'
                    render={() => <Profile/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route
                    path='/participants'
                    render={() => <ParticipantsContainer/>}/>
            </div>
        </div>

    );
}

export default App;
