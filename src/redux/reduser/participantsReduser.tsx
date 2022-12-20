

export type ParticipanType={
    id:number,
    name:string,
    useful:boolean, /* полезная для меня анкета или нет*/
    status: string
    photos: {
        small: string,
        large: string
    }
}

export type initialParticipantsStateType={
    participants:Array<ParticipanType>
}

const initialParticipantsState:initialParticipantsStateType={
    participants:[]

}

export const participantsReduser= (state:initialParticipantsStateType=initialParticipantsState,action:ActionType):initialParticipantsStateType=> {

    switch (action.type) {
        case 'USEFUL-PARTICIPANT': {
            return {...state,participants:state.participants.map(
                el=>el.id===action.idPartisipant
                    ?{...el,useful:!el.useful}
                    :el)}
        }
        case 'SET-PARTICIPANTS': {
            return {...state,participants:[...state.participants,...action.participants]}
        }

        default:return state
    }
}

type ActionType=ReturnType<typeof usefulParticipantAC>|ReturnType<typeof setParticipantsAC>

export const usefulParticipantAC = (idPartisipant:number) =>{
    return {
        type:'USEFUL-PARTICIPANT',
        idPartisipant,

    }as const
}

export const setParticipantsAC = (participants:Array<ParticipanType>) =>{
    return {
        type:'SET-PARTICIPANTS',
        participants
    }as const
}