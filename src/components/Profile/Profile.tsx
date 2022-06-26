import React from "react";
import {MyPost} from "./MyPost/MyPost";
import {HeaderProfile} from "./HeaderProfile/HeaderProfile";
import { TextForPostType } from "../../State";



export type ProfileType = {
    message:Array<TextForPostType>
}

export function Profile(props:ProfileType) {
    return (
        <div>
            <HeaderProfile/>
            <MyPost
                message={props.message}
            />

        </div>
    )
}