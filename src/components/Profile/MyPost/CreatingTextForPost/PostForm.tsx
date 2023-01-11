import {Field, reduxForm} from "redux-form";
import React from "react";
import st from "./CreatingTextForPost.module.css";

export const PostForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='your post'
                    name='newPostFromForm'
                    component='textarea'/>
            </div>
            <div>
                <button className={st.button}>added</button>
            </div>
        </form>
    )
}

export const PostReduxForm = reduxForm({
    form: 'creatingMessageInForm'
})(PostForm)