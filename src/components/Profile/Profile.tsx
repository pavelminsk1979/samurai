import React from "react";
import {ProfileInfo} from "./Profile/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {GetProfileType} from "../../common/Types/getProfileType";


type ProfileType = {
    profileUser:GetProfileType
}

export function Profile(props:ProfileType) {

    return (
        <div>
            <ProfileInfo profileUser={props.profileUser}/>
            <MyPostContainer />
        </div>
    )
}