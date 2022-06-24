import React from "react";
import st from './Profile.module.css'
import {MyPost} from "./MyPost/MyPost";

export function Profile() {
    return (
        <div className={st.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbjuoBf-52ba9upZE_xee9921LQ5h0gUzMg&usqp=CAU"/>
            </div>

            <div>
                ava+description
            </div>
            <MyPost/>

        </div>
    )
}