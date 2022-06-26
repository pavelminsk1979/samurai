import React from "react";
import {Post} from "./Post/Post";
import {CreatingTextForPost} from "./CreatingTextForPost/CreatingTextForPost";
import {TextForPostType} from "../../../State";




export type MyPostType={
    message:Array<TextForPostType>
}
export function MyPost(props:MyPostType) {

    return (
        <div>
           <CreatingTextForPost/>
            <div>
                {
                   props.message.map(el=>{
                        return(
                            <Post
                                key={el.id}
                                message={el.text}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}