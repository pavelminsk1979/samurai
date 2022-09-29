import React from "react";
import {Post} from "./Post/Post";
import {CreatingTextForPost} from "./CreatingTextForPost/CreatingTextForPost";
import {ProfilePostType} from "../../../redux/reduser/profileReduser";





export type MyPostType={
    posts:Array<ProfilePostType>
    dispatch:(action:any)=>void
    newPost:string
}
export function MyPost(props:MyPostType) {

    return (
        <div>
           <CreatingTextForPost
               newPost={props.newPost}
               dispatch={props.dispatch}

           />
            <div>
                <div>
                    {
                        props.posts.map(el=>{
                            return(
                                <Post
                                    key={el.id}
                                    text={el.text}
                                />
                            )
                        })
                    }
                </div>


            </div>
        </div>
    )
}