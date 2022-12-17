

export type ParticipanType={
    id:number,
    name:string,
    useful:boolean, /* полезная для меня анкета или нет*/
    status: string
}

export type StateType={
    participants:Array<ParticipanType>
}

const initialParticipantsState:StateType={
    participants:[
        {id:1, name:'Masha',useful:false, status:"I'm samurai"},
        {id:2, name:'Bond',useful:true, status:"I'm samurai 007"},
        {id:3, name:'President',useful:true, status:"Я устал, я ухожу..."},
        {id:4, name:'белочка',useful:false, status:'...прихожу'},
    ]
}

export const participantsReduser= (state=initialParticipantsState,action:ActionType):StateType=> {

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