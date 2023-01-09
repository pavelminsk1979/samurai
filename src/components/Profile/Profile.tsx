import React from "react";
import {ProfileInfo} from "./Profile/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfilesType} from "../../api/api";




type PropsType = {
    updateStatusMyProfile:(status: string) => void
    profileUser: ProfilesType
    status:string
}

export function Profile(props: PropsType) {


    return (
        <div>
            <ProfileInfo
                updateStatusMyProfile={props.updateStatusMyProfile}
                status={props.status}
                profileUser={props.profileUser}/>
            <MyPostContainer/>
        </div>
    )
}