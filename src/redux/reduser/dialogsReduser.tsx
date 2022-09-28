import {ActionType, StateType} from "../../State";

export const dialogsReduser= (state:StateType,action:ActionType)=>{
    switch (action.type) {
        case 'NEW-MESSAGE-USER-TEXT': {
            state.newMessageUserText=action.newMessageUserTextTexterea;
            return state
        }
        case 'ADDED-MESSAGE-USER-TEXT': {
            state.messageUser.push({id:6,message:state.newMessageUserText})
            return state
        }
        default:return state
    }
}

export type AddedMessageUserTextType={
    type:'ADDED-MESSAGE-USER-TEXT',
}
export const addedMessageUserTextAC = () =>{
    return {
        type:'ADDED-MESSAGE-USER-TEXT',
    }as const
}

export type NewMessageUserTextActionType={
    type:'NEW-MESSAGE-USER-TEXT',
    newMessageUserTextTexterea:string
}
export const newMessageUserTextAC = (newMessageUserTextTexterea:string) =>{
    return {
        type:'NEW-MESSAGE-USER-TEXT',
        newMessageUserTextTexterea
    }as const
}