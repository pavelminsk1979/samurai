import React from 'react';
import st from './App.module.css'
import {Header} from "./Header/Header";
import {NavBar} from "./NavBar/NavBar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {TextForPostType, MessageUserType, UserType} from "../index";

type AppType = {
    message: Array<TextForPostType>
    messageUser:Array<MessageUserType>
    user:Array<UserType>
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className={st.app}>
                <Header/>
                <NavBar/>
                <div className={st.content}>
                    <Route
                        path={'/dialogs'}
                        render={()=> <Dialogs
                            messageUser={props.messageUser}
                            user={props.user}/>}
                    />
                    <Route
                        path={'/profile'}
                        render={() => <Profile
                            message={props.message}/>}
                    />
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
