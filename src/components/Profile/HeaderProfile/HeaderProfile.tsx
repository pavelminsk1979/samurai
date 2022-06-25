import React from "react";
import st from './HeaderProfile.module.css'

export function HeaderProfile () {
    return(
        <div>
            <div className={st.illustration}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbjuoBf-52ba9upZE_xee9921LQ5h0gUzMg&usqp=CAU"/>
            </div>

            <div>
                ava+description
            </div>
        </div>
    )
}