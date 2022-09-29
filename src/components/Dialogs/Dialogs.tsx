import st from './Dialogs.module.css'
import {User} from "./User/User";
import {MessageUser} from "./MessageUser/MessageUser";
import React, {ChangeEvent} from "react";
import {addedDialogUserStatetAC, creatingDialogTextareaAC,
    DialogUserType} from "../../redux/reduser/dialogsReduser";


export type DialogsType = {
    /* user:any*/
    dispatch:(action:any)=>void
    newDialogUser:string
    dialogsUser:Array<DialogUserType>
}

export function Dialogs(props: DialogsType) {

    const addedDialogUserState = () => {
        props.dispatch(addedDialogUserStatetAC())
        const textEmpty = ''
        props.dispatch(creatingDialogTextareaAC(textEmpty))
    }

    const creatingDialogTextarea = (event:ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
      props.dispatch(creatingDialogTextareaAC(text))
    }
    
    return (
        <div className={st.dialogList}>
      {/*      <div className={st.allPerson}>
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
            </div>*/}

            <div className={st.messagesAll}>
                <div>
                    <div><textarea
                        onChange={creatingDialogTextarea}
                        value={props.newDialogUser}></textarea></div>
                    <div><button onClick={addedDialogUserState}>added</button></div>
                </div>

                {props.dialogsUser.map(el => {
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