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
}

type AddedPostActionType={
    type:'ADDED-POST'
}

type ChangeTexteriaActionType={
    type:'CHANGE-IN-TEXTERIA'
    valueTaxtarea:string
}
export type ActionType=AddedPostActionType|ChangeTexteriaActionType

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
        }
    },
    subscribe(observe) {
        this.renderingState = observe
    }

}







