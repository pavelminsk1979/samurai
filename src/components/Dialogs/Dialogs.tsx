import st from './Dialogs.module.css'
import {MessageUser} from "./MessageUser/MessageUser";
import React, {ChangeEvent} from "react";
import {
    addedMessageStatetAC,
    creatingMessageinTextareaAC,
    MessageType,
    UserNameType
} from "../../redux/reduser/dialogsReduser";
import {User} from "./User/User";


export type DialogsType = {
    userName:Array<UserNameType>
    dispatch:(action:any)=>void
    newMessageForState:string
    messageState:Array<MessageType>
}

export function Dialogs(props: DialogsType) {

    const addedMessageStatet = () => {
        props.dispatch(addedMessageStatetAC())
        const textEmpty = ''
        props.dispatch(creatingMessageinTextareaAC(textEmpty))
    }

    const creatingMessageInTextarea = (event:ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
      props.dispatch(creatingMessageinTextareaAC(text))
    }
    
    return (
        <div className={st.dialogList}>
            <div className={st.allPerson}>
                {props.userName.map(el => {
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
                        onChange={creatingMessageInTextarea}
                        value={props.newMessageForState}></textarea></div>
                    <div><button onClick={addedMessageStatet}>added</button></div>
                </div>

                {props.messageState.map(el => {
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