import React from "react";
import {ProfileInfo} from "./Profile/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfilesType} from "../../api/api";



type PropsType = {
    profileUser: ProfilesType
}

export function Profile(props: PropsType) {

    return (
        <div>
            <ProfileInfo profileUser={props.profileUser}/>
            <MyPostContainer/>
        </div>
    )
}