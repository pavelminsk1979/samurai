import {ActionType, StateType} from "../../State";

export const profileReduser= (state:StateType,action:ActionType)=> {

    switch (action.type) {
        case 'ADDED-POST': {
            state.message.push({id: 6, text: state.stateTextarea})
            return state
        }
        case 'CHANGE-IN-TEXTERIA': {
            state.stateTextarea = action.valueTaxtarea
            return state
        }
        default:return state
    }
}

export type AddedPostActionType={
    type:'ADDED-POST'
}
export const addedPostAC = () =>{
    return {
        type:'ADDED-POST'
    }as const
}

export type ChangeTexteriaActionType={
    type:'CHANGE-IN-TEXTERIA'
    valueTaxtarea:string
}
export const changeTextareaAC = (valueTaxtarea:string) =>{
    return {
        type:'CHANGE-IN-TEXTERIA',
        valueTaxtarea
    }as const
}
