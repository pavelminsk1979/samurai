import st from './Dialogs.module.css'
import {User} from "./User/User";
import {MessageUser} from "./MessageUser/MessageUser";
import {MessageUserType, UserType} from '../../State';



export type DialogsType = {
    messageUser:Array<MessageUserType>
    user:Array<UserType>
}

export function Dialogs(props: DialogsType) {

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