import React from "react";
import st from './Post.module.css'


type PostType={
    text:string
}

export function Post (props:PostType) {
    return(
        <div className={st.post}>

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxozN5AMWnGRjwQNf7K2mz5PCARUt2fkPO5A&usqp=CAU"/>

            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohy5X6YB_C1gNJ_RhB29PWx_apCsSigsQNA&usqp=CAU"/>
            {props.text}
        </div>
    )
}