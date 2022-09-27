import React from "react";
import {Post} from "./Post/Post";
import {CreatingTextForPost} from "./CreatingTextForPost/CreatingTextForPost";
import {ActionType, TextForPostType} from "../../../State";




export type MyPostType={
    message:Array<TextForPostType>
    dispatch:(action:ActionType)=>void
    valueTaxtarea:string
}
export function MyPost(props:MyPostType) {

    return (
        <div>
           <CreatingTextForPost
               valueTaxtarea={props.valueTaxtarea}
               dispatch={props.dispatch}

           />
            <div>
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
        </div>
    )
}