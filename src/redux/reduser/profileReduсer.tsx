import {ContactsType, profilesAPI, ProfilesType} from "../../api/api"
import {Dispatch} from "redux";


export type ProfilePostType = {
    id: number
    text: string
}

const initState = {
    posts: [
        {id: 1, text: 'mmmm...'},
        {id: 2, text: 'What is it'},
        {id: 3, text: 'I  come home better'}

    ] as Array<ProfilePostType>,
    newPost: '',
    profileUser: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        } as ContactsType,
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        },
        userId: 1
    } as ProfilesType
}

export type InitStateType = typeof initState

export const profileReduсer = (state: InitStateType = initState, action: ActionType): InitStateType => {

    switch (action.type) {
        case 'ADDED-POST-STATE': {
            return {
                ...state, posts: [{
                    id: 4, text: state.newPost
                }, ...state.posts]
            }
        }
        case 'CREATING-POST-IN-TEXTAREA': {

            return {...state, newPost: action.symbolTaxtarea};
        }
        case "SET-PROFILE-USER": {
            console.log('trigger')
            return {...state, profileUser: action.profileUser}
        }
        default:
            return state
    }
}

type ActionType = createTextInTextareaACType
    | addedPostInStateACType
    | setProfileUsersType


type setProfileUsersType = ReturnType<typeof setProfileUsers>
export const setProfileUsers = (profileUser: ProfilesType) => {
    return {
        type: 'SET-PROFILE-USER',
        profileUser
    } as const
}

type addedPostInStateACType = ReturnType<typeof addedPostInStateAC>
export const addedPostInStateAC = () => {
    return {
        type: 'ADDED-POST-STATE'
    } as const
}


type createTextInTextareaACType = ReturnType<typeof createTextInTextareaAC>
export const createTextInTextareaAC = (symbolTaxtarea: string) => {
    return {
        type: 'CREATING-POST-IN-TEXTAREA',
        symbolTaxtarea
    } as const
}

/*thunk*/
export const getProfiles = (userId: string) => (dispatch: Dispatch) => {
    profilesAPI.getProfiles(userId)
        .then((data) => {
            dispatch(setProfileUsers(data))
        })
}
