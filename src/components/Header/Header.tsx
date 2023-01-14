import React from "react";
import {NavLink} from "react-router-dom";
import st from './Header.module.css'
import {HeaderType} from "./HeaderContainer";


export function Header(props: HeaderType) {
    const logoutHundler = () => {
      props.logout()
    }
    return (
        <header className={st.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HJJq3RSb9DNHVQz7RPOeTA8mAmEYKQosPw&usqp=CAU"/>
            <div className={st.loginBlok}>
                {props.isLogin
                    ? <button onClick={logoutHundler}>Log out</button>
                    : <NavLink to={'/login'}>Hey! ne grusti-SNIKERSNI!</NavLink>}
            </div>
            <span>{props.id}</span>
            <span>{props.login}</span>
        </header>
    )
}