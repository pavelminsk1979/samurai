
export type MessageType = {
    id: number
    message: string
}
export type UserNameType = {
    idName: number
    name: string
}

const initialMessageState={
    userName: [
        {idName: 1, name: 'Pavel'},
        {idName: 2, name: 'Olga'},
        {idName: 3, name: 'Inokenti'},
        {idName: 4, name: 'Sonia'},
        {idName: 5, name: 'Kuzma'},
        {idName: 6, name: 'Svinka Pepi'}
    ] as Array<UserNameType>,
    messageState: [
        {id: 1, message: 'Help me with money'},
        {id: 2, message: 'Ooooh...'},
        {id: 3, message: 'I want to buy a car'},
        {id: 4, message: 'Mercedes?'},
        {id: 5, message: 'Ou-Ou! I also want money'}
    ] as Array<MessageType>,
    newMessageForState:''
}

export type initialMessageStateType=typeof initialMessageState

export const dialogReduсer= (state:initialMessageStateType=initialMessageState, action:ActionType):initialMessageStateType=>{
    switch (action.type) {
        case 'ADDED-MESSAGE-USER-STATE': {
            return {...state,messageState:[{id:6,message:state.newMessageForState},...state.messageState]}
        }
        case 'CREATING-MESSAGE-IN-TEXTAREA': {
            return{...state,newMessageForState:action.textTexterea}
        }

        default:return state
    }
}

type ActionType=ReturnType<typeof addedMessageStatetAC>|ReturnType<typeof creatingMessageinTextareaAC>


export const addedMessageStatetAC = () =>{
    return {
        type:'ADDED-MESSAGE-USER-STATE',
    }as const
}


export const creatingMessageinTextareaAC = (textTexterea:string) =>{
    return {
        type:'CREATING-MESSAGE-IN-TEXTAREA',
        textTexterea
    }as const
}