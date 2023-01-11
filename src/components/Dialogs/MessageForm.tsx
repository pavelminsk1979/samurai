import React from "react";
import {Field, reduxForm} from "redux-form";


export const MessageForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='your message'
                    name='newMessageFromForm'
                    component='textarea'/>
            </div>
            <div>
                <button>added</button>
            </div>
        </form>
    )
}

export const MessageReduxForm = reduxForm({
    form: 'creatingMessageInForm'
})(MessageForm)