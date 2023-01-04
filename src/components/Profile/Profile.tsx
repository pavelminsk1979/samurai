import React from "react";
import {ProfileInfo} from "./Profile/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfilesType} from "../../api/api";
import {Redirect} from "react-router-dom";



type PropsType = {
    profileUser: ProfilesType
    isLogin:boolean
}

export function Profile(props: PropsType) {

    if(props.isLogin===false){
        return <Redirect to={'/login'}/>
    }
    return (
        <div>
            <ProfileInfo profileUser={props.profileUser}/>
            <MyPostContainer/>
        </div>
    )
}