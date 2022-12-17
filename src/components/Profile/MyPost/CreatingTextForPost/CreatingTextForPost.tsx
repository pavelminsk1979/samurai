import React, {ChangeEvent} from "react";
import st from './CreatingTextForPost.module.css'
export type CreatingTextForPostType = {
    createTextInTextarea: (symbol: any) => void
    addedPostInState: () => void
    newPost: string
}


export function CreatingTextForPost(props: CreatingTextForPostType) {


    const createTextInTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const symbol = event.currentTarget.value
        props.createTextInTextarea(symbol)
    }

    const addedPostInState = () => {
        props.addedPostInState()
        props.createTextInTextarea('')
    }


    return (
        <div>
            <div className={st.title}>
                My post
            </div>
            <div>
                <textarea
                    value={props.newPost}
                    onChange={createTextInTextarea}/>
                <div>
                    <button
                        onClick={addedPostInState}
                        className={st.button}>added post
                    </button>
                </div>

            </div>

        </div>
    )
}
