import React from "react";
import {MyPost} from "./MyPost/MyPost";
import {HeaderProfile} from "./HeaderProfile/HeaderProfile";
import {ActionType, TextForPostType} from "../../State";



export type ProfileType = {
    message:Array<TextForPostType>
    dispatch:(action:ActionType)=>void
    valueTaxtarea:string
}

export function Profile(props:ProfileType) {

    return (
        <div>
            <HeaderProfile/>
            <MyPost
                valueTaxtarea={props.valueTaxtarea}
                dispatch={props.dispatch}
                message={props.message}
            />

        </div>
    )
}