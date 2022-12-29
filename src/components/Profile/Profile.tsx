import React from "react";
import {ProfileInfo} from "./Profile/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {GetProfileType} from "../../common/Types/getProfileType";


type PropsType = {
    profileUser: GetProfileType
}

export function Profile(props: PropsType) {

    return (
        <div>
            <ProfileInfo profileUser={props.profileUser}/>
            <MyPostContainer/>
        </div>
    )
}