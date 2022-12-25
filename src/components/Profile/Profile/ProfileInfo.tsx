import React from "react";
import st from './ProfileInfo.module.css'
import {Loading} from "../../../common/components/Loading";

type HeaderProfileType = {
    profileUser: any
}

export function ProfileInfo(props: HeaderProfileType) {
    if (!props.profileUser) {
        return <Loading/>
    }
    return (
        <div>
            <div className={st.illustration}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbjuoBf-52ba9upZE_xee9921LQ5h0gUzMg&usqp=CAU"/>
            </div>

            <div>
                <img src={props.profileUser.photos.large}/>
                <div>
                    Hey!!!  {props.profileUser.aboutMe}
                </div>
                <span> My name {props.profileUser.fullName}.</span>
                <span> I work {props.profileUser.lookingForAJobDescription}</span>
                <div>
                    <img src={props.profileUser.photos.small}/>
                </div>

                <div>My id {props.profileUser.userId}</div>

            </div>
        </div>
    )
}