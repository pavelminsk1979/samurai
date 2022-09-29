import React from "react";
import {MyPost} from "./MyPost/MyPost";
import {HeaderProfile} from "./HeaderProfile/HeaderProfile";
import {ProfilePostType} from "../../redux/reduser/profileReduser";



export type ProfileType = {
    posts:Array<ProfilePostType>
    dispatch:(action:any)=>void
    newPost:string
}

export function Profile(props:ProfileType) {

    return (
        <div>
            <HeaderProfile/>
            <MyPost
                newPost={props.newPost}
                dispatch={props.dispatch}
                posts={props.posts}
            />

        </div>
    )
}