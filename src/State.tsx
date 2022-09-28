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

type AddedPostActionType={
    type:'ADDED-POST'
}
export const addedPostAC = () =>{
    return {
        type:'ADDED-POST'
    }as const
}

type ChangeTexteriaActionType={
    type:'CHANGE-IN-TEXTERIA'
    valueTaxtarea:string
}
export const changeTextareaAC = (valueTaxtarea:string) =>{
    return {
        type:'CHANGE-IN-TEXTERIA',
        valueTaxtarea
    }as const
}

type NewMessageUserTextActionType={
    type:'NEW-MESSAGE-USER-TEXT',
    newMessageUserTextTexterea:string
}
export const newMessageUserTextAC = (newMessageUserTextTexterea:string) =>{
    return {
        type:'NEW-MESSAGE-USER-TEXT',
        newMessageUserTextTexterea
    }as const
}

type AddedMessageUserTextType={
    type:'ADDED-MESSAGE-USER-TEXT',
}
export const addedMessageUserTextAC = () =>{
    return {
        type:'ADDED-MESSAGE-USER-TEXT',
    }as const
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
        if (action.type === 'ADDED-POST') {
            this._state.message.push({id: 6, text: this._state.stateTextarea})
            this.renderingState(this._state)
        } else if (action.type=== 'CHANGE-IN-TEXTERIA'){
            this._state.stateTextarea =action.valueTaxtarea
            this.renderingState(this.getState());
        } else if(action.type==='NEW-MESSAGE-USER-TEXT'){
           this._state.newMessageUserText=action.newMessageUserTextTexterea;
            this.renderingState(this._state)
        }else if (action.type==='ADDED-MESSAGE-USER-TEXT'){
            this._state.messageUser.push({id:6,message:this._state.newMessageUserText})
            this.renderingState(this._state)
        }
    },
    subscribe(observe) {
        this.renderingState = observe
    }

}







