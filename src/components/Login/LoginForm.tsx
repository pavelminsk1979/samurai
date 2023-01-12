import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsErrorStule/FormsErrorTextarea";
import {requiredField} from "../../utils/validators/validators";

export const LoginForm = (props:any) => {
  return(
      <form onSubmit={props.handleSubmit}>
          <div><Field
              validate={[requiredField]}
              name={'login'}
              placeholder={'login'}
              component={Input}/></div>
          <div><Field
              validate={[requiredField]}
              name={'password'}
              placeholder={'password'}
              component={Input}/></div>
          <div><Field
              name={'Remember me'}
              type={'checkbox'}
              component={Input}/>Remember me</div>
          <div><button>Login</button></div>
      </form>
  )
}

export const LoginReduxForm = reduxForm({
form:'login'
}) (LoginForm)