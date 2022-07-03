import React from "react";
import {Post} from "./Post/Post";
import {CreatingTextForPost} from "./CreatingTextForPost/CreatingTextForPost";
import { TextForPostType} from "../../../State";




export type MyPostType={
    message:Array<TextForPostType>
    creatingMessage:()=>void
    changeTextarea:(valueTaxtarea:string)=>void
    valueTaxtarea:string
}
export function MyPost(props:MyPostType) {

    return (
        <div>
           <CreatingTextForPost
               valueTaxtarea={props.valueTaxtarea}
               changeTextarea={props.changeTextarea}
               creatingMessage={props.creatingMessage}
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