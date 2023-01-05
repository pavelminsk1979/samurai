import React from 'react';
import st from './App.module.css'
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import ParticipantsContainer from "./components/Participants/ParticipantsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = () => {
    return (
        <div className={st.app}>
            <HeaderContainer/>
            <NavBar/>
            <div className={st.content}>
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer/>}/>
                <Route
                    path='/profile/:userId?'
                    render={() => <ProfileContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route
                    path='/participants'
                    render={() => <ParticipantsContainer/>}/>
                <Route path='/login' component={Login}/>
            </div>
        </div>

    );
}

export default App;
