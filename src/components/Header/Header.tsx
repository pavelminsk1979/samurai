import React from "react";
import {NavLink} from "react-router-dom";
import st from './Header.module.css'
import {HeaderType} from "./HeaderContainer";


export function Header(props: HeaderType) {
    return (
        <header className={st.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HJJq3RSb9DNHVQz7RPOeTA8mAmEYKQosPw&usqp=CAU"/>
            <div className={st.loginBlok}>
                {props.isLogin
                    ? props.login
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
            <span>{props.id}</span>
            <span>{props.email}</span>
        </header>
    )
}