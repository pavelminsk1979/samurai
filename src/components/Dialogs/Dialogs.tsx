
import st from './Dialogs.module.css'
import {User} from "./User";
import {MessageUser} from "./MessageUser";

export type DialogsType = {}

export function Dialogs(props: DialogsType) {
    return (
        <div className={st.dialogList}>
            <div className={st.allPerson}>
                <User
                    name={'Pavel'}
                    idName={1}/>
                <User
                    name={'Olga'}
                    idName={2}/>
                <User
                    name={'Inokenti'}
                    idName={3}/>
                <User
                    name={'Sonia'}
                    idName={4}/>
                <User
                    name={'Kuzma'}
                    idName={5}/>
            </div>
            <div className={st.messagesAll}>
                <MessageUser message={'Help me with money'}/>
                <MessageUser message={'Ooooh...'}/>
                <MessageUser message={'I want to buy a car'}/>
                <MessageUser message={'Mercedes?'}/>

            </div>
        </div>
    )
}