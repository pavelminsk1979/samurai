import React from "react";
import {Post} from "./Post/Post";
import {CreatingTextForPost} from "./CreatingTextForPost/CreatingTextForPost";
import {MyPostType} from "./MyPostContainer";



export const MyPost=(props: MyPostType)=> {

    return (
        <div>
            <CreatingTextForPost
                newPost={props.newPost}
                createTextInTextarea={props.createTextInTextarea}
                addedPostInState={props.addedPostInState}


            />
            <div>
                <div>
                    {
                        props.posts.map(el => {
                            return (
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