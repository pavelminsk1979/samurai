import React from "react";
import {MyPost} from "./MyPost/MyPost";
import {HeaderProfile} from "./HeaderProfile/HeaderProfile";
import { TextForPostType} from "../../State";



export type ProfileType = {
    message:Array<TextForPostType>
    creatingMessage:()=>void
    changeTextarea:(valueTaxtarea:string)=>void
    valueTaxtarea:string
}

export function Profile(props:ProfileType) {

    return (
        <div>
            <HeaderProfile/>
            <MyPost
                valueTaxtarea={props.valueTaxtarea}
                changeTextarea={props.changeTextarea}
                message={props.message}
                creatingMessage={props.creatingMessage}
            />

        </div>
    )
}