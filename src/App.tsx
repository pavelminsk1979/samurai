import React from 'react';
import st from './App.module.css'
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./State";


export type AppType={
    state:StateType
    creatingMessage:()=>void
    changeTextarea:(valueTaxtarea:string)=>void
    valueTaxtarea:string
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
                            messageUser={props.state.messageUser}
                            user={props.state.user}/>}
                    />
                    <Route
                        path={'/profile'}
                        render={() => <Profile
                            valueTaxtarea={props.valueTaxtarea}
                            changeTextarea={props.changeTextarea}
                            message={props.state.message}
                            creatingMessage={props.creatingMessage}
                        />}
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
