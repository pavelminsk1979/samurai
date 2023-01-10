import React from 'react';
import {LoginReduxForm} from "./LoginForm";


export const Login = () => {
    const onSubmitHundler = (formData:any) => {
        console.log(formData)
    }

    return (<div>
            <h2>LOGIN</h2>
          <LoginReduxForm onSubmit={onSubmitHundler}/>
        </div>
    )
}