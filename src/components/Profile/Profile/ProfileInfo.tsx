import React from "react";
import st from './ProfileInfo.module.css'
import {Loading} from "../../../common/components/Loading";
import {ProfilesType} from "../../../api/api";

type HeaderProfileType = {
    profileUser: ProfilesType
}

export function ProfileInfo(props: HeaderProfileType) {
    if (!props.profileUser) {
        return <Loading/>
    }
    return (
        <div>
            <div className={st.illustration}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbjuoBf-52ba9upZE_xee9921LQ5h0gUzMg&usqp=CAU"
                alt={''}/>
            </div>

            <div>
                <img src={props.profileUser.photos.large}  alt={'large ava'}/>
                <div>
                    Hey!!!  {props.profileUser.aboutMe}
                </div>
                <span> My name {props.profileUser.fullName}.</span>
                <span> I work {props.profileUser.lookingForAJobDescription}</span>
                <div>
                    <img src={props.profileUser.photos.small} alt={'small ava'}/>
                </div>

                <div>My id {props.profileUser.userId}</div>

            </div>
        </div>
    )
}