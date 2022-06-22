import React from "react";
import st from './NavBar.module.css'
export function NavBar () {
    return(
        <nav className={st.nav}>
            <div><a>Profile</a></div>
            <div><a>Message</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
    )
}