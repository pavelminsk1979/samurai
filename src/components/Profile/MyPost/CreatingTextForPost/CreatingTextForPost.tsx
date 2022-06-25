import React from "react";
import st from './CreatingTextForPost.module.css'

export function CreatingTextForPost() {
    return (
        <div>
            <div className={st.title}>
                My post
            </div>
<div>
    <textarea></textarea>
    <button className={st.button}>tiss</button>
</div>

        </div>
    )
}