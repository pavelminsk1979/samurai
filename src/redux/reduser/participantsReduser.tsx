export type ParticipanType = {
    id: number,
    name: string,
    useful: boolean, /* полезная для меня анкета или нет*/
    status: string
    photos: {
        small: string,
        large: string
    }
}

const initialParticipantsState: initialParticipantsStateType = {
    participants: [],
    count: 100,
    totalCount: 0,
    activePage: 1,
    isLoading: false
}

export type initialParticipantsStateType = {
    participants: Array<ParticipanType>
    count: number,
    totalCount: number
    activePage: number
    isLoading: boolean
}

export const participantsReduser = (state: initialParticipantsStateType = initialParticipantsState, action: ActionType): initialParticipantsStateType => {

    switch (action.type) {
        case 'USEFUL-PARTICIPANT': {
            return {
                ...state, participants: state.participants.map(
                    el => el.id === action.idPartisipant
                        ? {...el, useful: !el.useful}
                        : el)
            }
        }
        case 'SET-PARTICIPANTS': {
            return {...state, participants: action.participants}
        }
        case "SET-ACTIVE-PAGE": {
            return {...state, activePage: action.activePagesNumber}
        }
        case "SET-TOTALCOUNT": {
            return {...state, totalCount: action.count}
        }
        case "CHANGE-ISLOADING":{
            return {...state, isLoading:action.loading}
        }

        default:
            return state
    }
}


type changeIsLoadingACType = ReturnType<typeof changeIsLoading>
export const changeIsLoading = (loading:boolean) => {
    return {
        type: 'CHANGE-ISLOADING',
        loading
    } as const
}

type usefulParticipantACType = ReturnType<typeof usefulParticipant>
export const usefulParticipant = (idPartisipant: number) => {
    return {
        type: 'USEFUL-PARTICIPANT',
        idPartisipant,

    } as const
}

type setParticipantsACType = ReturnType<typeof setParticipants>
export const setParticipants = (participants: Array<ParticipanType>) => {
    return {
        type: 'SET-PARTICIPANTS',
        participants
    } as const
}

type setActivePageACType = ReturnType<typeof setActivePage>
export const setActivePage = (activePagesNumber: number) => {
    return {
        type: 'SET-ACTIVE-PAGE',
        activePagesNumber
    } as const
}

type setTotalCountACType = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTALCOUNT',
        count: totalCount
    } as const
}

type ActionType = setTotalCountACType
    | setActivePageACType
    | setParticipantsACType
    | usefulParticipantACType
    | changeIsLoadingACType