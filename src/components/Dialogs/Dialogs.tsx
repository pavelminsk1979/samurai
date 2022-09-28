import st from './Dialogs.module.css'
import {User} from "./User/User";
import {MessageUser} from "./MessageUser/MessageUser";
import {ActionType,  MessageUserType,  UserType} from '../../State';
import React, {ChangeEvent} from "react";
import {addedMessageUserTextAC,newMessageUserTextAC} from "../../redux/reduser/dialogsReduser";




export type DialogsType = {
    messageUser:Array<MessageUserType>
    user:Array<UserType>
    dispatch:(action:ActionType)=>void
    newMessageUserTextTexterea:string
}

export function Dialogs(props: DialogsType) {

    const onClickForButtonTextarea = () => {
        props.dispatch(addedMessageUserTextAC())
        const textEmpty = ''
        props.dispatch(newMessageUserTextAC(textEmpty))
    }

    const addedNewMessageUserTextTexterea = (event:ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
      props.dispatch(newMessageUserTextAC(text))
    }
    
    return (
        <div className={st.dialogList}>
            <div className={st.allPerson}>
                {props.user.map(el => {
                        return (
                            <User
                                key={el.idName}
                                name={el.name}
                                idName={el.idName}/>
                        )
                    }
                )
                }
            </div>

            <div className={st.messagesAll}>
                <div>
                    <div><textarea
                        onChange={addedNewMessageUserTextTexterea}
                        value={props.newMessageUserTextTexterea}></textarea></div>
                    <div><button onClick={onClickForButtonTextarea}>added</button></div>
                </div>

                {props.messageUser.map(el => {
                        return (
                            <MessageUser
                                key={el.id}
                                message={el.message}
                            />
                        )
                    }
                )
                }


            </div>
        </div>
    )
}