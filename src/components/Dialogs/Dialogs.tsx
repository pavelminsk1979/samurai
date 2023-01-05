import st from './Dialogs.module.css'
import {MessageUser} from "./MessageUser/MessageUser";
import React, {ChangeEvent, FC} from "react";
import {User} from "./User/User";
import {DialogsType} from './DialogsContainer';


export const Dialogs: FC<DialogsType> = (props) => {

    const addedMessageStatet = () => {
        props.addedMessageStatet()
        props.creatingMessageinTextarea('')
    }

    const creatingMessageInTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const textTexterea = event.currentTarget.value
        props.creatingMessageinTextarea(textTexterea)
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
                    <div>
                        <button onClick={addedMessageStatet}>added</button>
                    </div>
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