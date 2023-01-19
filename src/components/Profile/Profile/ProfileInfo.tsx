import React from "react";
import st from './ProfileInfo.module.css'
import {Loading} from "../../../common/components/Loading";
import {ProfilesType} from "../../../api/api";
import {ProfileStatus} from "./ProfileStatus";

type HeaderProfileType = {
    profileUser: ProfilesType
    status:string
    updateStatusMyProfile:(status: string) => void
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
                <ProfileStatus
                    updateStatusMyProfile={props.updateStatusMyProfile}
                    status={props.status}/>
                <img src={props.profileUser.photos.large}  alt={'large ava'}/>
                <div>
                    Учуь програмировать, и будет навено норм если научусь
                </div>
                <span> My e-mail {props.profileUser.fullName}@mail.ru</span>
                <span>  </span>
                <div>
                    <img src={props.profileUser.photos.small} alt={'small ava'}/>
                </div>

                <div>My id {props.profileUser.userId}</div>

            </div>
        </div>
    )
}