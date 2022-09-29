
export type ProfilePostType = {
    id: number
    text: string
}
type StateProfilePostsType={
    posts:Array<ProfilePostType>
    newPost:string
}
const initialStateProfilePost:StateProfilePostsType={
    posts: [
        {id: 1, text: 'mmmm...'},
        {id: 2, text: 'What is it'},
        {id: 3, text: 'I  come home better'}

    ],
    newPost:'',
}

export const profileReduser= (state:StateProfilePostsType=initialStateProfilePost,action:ActionType)=> {

    switch (action.type) {
        case 'ADDED-POST-STATE': {
            return {...state,posts:[{id: 4, text: state.newPost},...state.posts]}
        }
        case 'CREATING-POST-IN-TEXTAREA': {

            return {...state,newPost: action.valueTaxtarea};
        }
        default:return state
    }
}

 type ActionType=ReturnType<typeof addedPostAC>|ReturnType<typeof creatingPostTextareaAC>

export const addedPostAC = () =>{
    return {
        type:'ADDED-POST-STATE'
    }as const
}


export const creatingPostTextareaAC = (valueTaxtarea:string) =>{
    return {
        type:'CREATING-POST-IN-TEXTAREA',
        valueTaxtarea
    }as const
}
