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
import {StateReduxStorType} from "./redux/reduser/reduxStor";


export type AppType={
    state:StateReduxStorType
    dispatch:(action:any)=>void
    newPost:string
    newDialogUser:string
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
                            newDialogUser={props.newDialogUser}
                            dispatch={props.dispatch}
                            dialogsUser={props.state.dialogsMessageUser.dialogsUser}
                            /*user={props.state.user}*//>}
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
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
