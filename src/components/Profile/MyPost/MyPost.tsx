import React from "react";
import {Post} from "./Post/Post";

export function MyPost() {
    return (
        <div>
            <div>
                My post

                <textarea></textarea>
                <button>tiss</button>
            </div>
            <div>
                <Post message={'mmmm...'}/>
                <Post message={'What is it'}/>
                <Post message={'I better come home'}/>

            </div>
        </div>
    )
}