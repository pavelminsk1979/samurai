import React from "react";
import {HeaderProfile} from "./HeaderProfile/HeaderProfile";
import MyPostContainer from "./MyPost/MyPostContainer";


type ProfileType = {
    profileUser:any
}

export function Profile(props:ProfileType) {

    return (
        <div>
            <HeaderProfile profileUser={props.profileUser}/>
            <MyPostContainer />
        </div>
    )
}