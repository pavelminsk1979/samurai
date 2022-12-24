export type ProfilePostType = {
    id: number
    text: string
}

const initialStateProfilePost = {
    posts: [
        {id: 1, text: 'mmmm...'},
        {id: 2, text: 'What is it'},
        {id: 3, text: 'I  come home better'}

    ] as Array<ProfilePostType>,
    newPost: '',
    profileUser:null
}

export type initialStateProfilePostType = typeof initialStateProfilePost

export const profileReduser = (state: initialStateProfilePostType = initialStateProfilePost, action: ActionType): initialStateProfilePostType => {

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
        case "SET-PROFILE-USER":{
            return {...state,profileUser:action.profileUser}
        }
        default:
            return state
    }
}

type ActionType = createTextInTextareaACType
    | addedPostInStateACType
    | setProfileUsersType


type setProfileUsersType = ReturnType<typeof setProfileUsers>
export const setProfileUsers = (profileUser:any) => {
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
