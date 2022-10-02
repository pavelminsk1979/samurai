import React from 'react';
import st from './App.module.css'
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateReduxStorType} from "./redux/reduser/reduxStor";
import {Participants} from "./components/Participants/Participants";
import ParticipantsContainer from "./components/Participants/ParticipantsContainer";



export type AppType={
    state:StateReduxStorType
    dispatch:(action:any)=>void
    newPost:string
    newMessageForState:string
}


function App(props: AppType) {

    return (

            <div className={st.app}>
                <Header/>
                <NavBar/>
                <div className={st.content}>
                    <Route
                        path={'/dialogs'}
                        render={()=> <Dialogs
                            newMessageForState={props.newMessageForState}
                            dispatch={props.dispatch}
                            messageState={props.state.dialogsMessageUser.messageState}
                            userName={props.state.dialogsMessageUser.userName}/>}
                    />
                    <Route
                        path={'/profile'}
                        render={() => <Profile
                            newPost={props.newPost}
                            dispatch={props.dispatch}
                            posts={props.state.profilePost.posts}
                        />}
                    />
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/participants'} render={() => <ParticipantsContainer/>}/>
                </div>
            </div>

    );
}

export default App;
