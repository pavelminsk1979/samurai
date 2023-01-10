import React from "react";
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props:any) => {
  return(
      <form onSubmit={props.handleSubmit}>
          <div><Field
              name={'login'}
              placeholder={'login'}
              component={'input'}/></div>
          <div><Field
              name={'password'}
              placeholder={'password'}
              component={'input'}/></div>
          <div><Field
              name={'Remember me'}
              type={'checkbox'}
              component={'input'}/>Remember me</div>
          <div><button>Login</button></div>
      </form>
  )
}

export const LoginReduxForm = reduxForm({
form:'login'
}) (LoginForm)