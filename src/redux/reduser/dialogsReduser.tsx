
export type DialogUserType = {
    id: number
    message: string
}
type StateDialogsUserType={
    dialogsUser:Array<DialogUserType>
    newDialogUser:string
}
const initialStateDialogsUser:StateDialogsUserType={
    dialogsUser: [
        {id: 1, message: 'Help me with money'},
        {id: 2, message: 'Ooooh...'},
        {id: 3, message: 'I want to buy a car'},
        {id: 4, message: 'Mercedes?'},
        {id: 5, message: 'Ou-Ou! I also want money'}
    ],
    newDialogUser:''
}

export const dialogsReduser= (state:StateDialogsUserType=initialStateDialogsUser,action:ActionType)=>{
    switch (action.type) {
        case 'ADDED-DIALOG-USER-STATE': {
            return {...state,dialogsUser:[{id:6,message:state.newDialogUser},...state.dialogsUser]}
        }
        case 'CREATING-DIALOG-IN-TEXTAREA': {

            state.newDialogUser=action.textTexterea;
            return state
        }

        default:return state
    }
}

type ActionType=ReturnType<typeof addedDialogUserStatetAC>|ReturnType<typeof creatingDialogTextareaAC>


export const addedDialogUserStatetAC = () =>{
    return {
        type:'ADDED-DIALOG-USER-STATE',
    }as const
}


export const creatingDialogTextareaAC = (textTexterea:string) =>{
    return {
        type:'CREATING-DIALOG-IN-TEXTAREA',
        textTexterea
    }as const
}