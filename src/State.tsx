import {AddedPostActionType, ChangeTexteriaActionType, profileReduser} from "./redux/reduser/profileReduser";
import {AddedMessageUserTextType, dialogsReduser, NewMessageUserTextActionType} from "./redux/reduser/dialogsReduser";

export type TextForPostType = {
    id: number
    text: string
}

export type UserType = {
    name: string
    idName: number
}

export type MessageUserType = {
    id: number
    message: string
}

export type StateType = {
    message: Array<TextForPostType>
    messageUser: Array<MessageUserType>
    user: Array<UserType>
    stateTextarea: string
    newMessageUserText:string
}


export type ActionType=AddedPostActionType|ChangeTexteriaActionType|NewMessageUserTextActionType|AddedMessageUserTextType


export type StoreType = {
    _state: StateType
    renderingState: (state: StateType) => void
    subscribe: (observe: (state: StateType) => void) => void
    getState: () => StateType
    dispatch:(action:ActionType)=>void
}



export const store: StoreType = {
    _state: {
        message: [
            {id: 1, text: 'mmmm...'},
            {id: 2, text: 'What is it'},
            {id: 3, text: 'I  come home better'}

        ],
        user: [
            {idName: 1, name: 'Pavel'},
            {idName: 2, name: 'Olga'},
            {idName: 3, name: 'Inokenti'},
            {idName: 4, name: 'Sonia'},
            {idName: 5, name: 'Kuzma'}
        ],
        messageUser: [
            {id: 1, message: 'Help me with money'},
            {id: 2, message: 'Ooooh...'},
            {id: 3, message: 'I want to buy a car'},
            {id: 4, message: 'Mercedes?'},
            {id: 5, message: 'Ou-Ou! I also want money'}
        ],
        newMessageUserText:'',
        stateTextarea: ''
    },
    getState() {
        return this._state;
    },

    renderingState(state: StateType) {
        console.log('State change')
    },

    dispatch(action:ActionType) {
        profileReduser(this._state,action)
        dialogsReduser(this._state,action)
        this.renderingState(this._state)
    },
    subscribe(observe) {
        this.renderingState = observe
    }

}







