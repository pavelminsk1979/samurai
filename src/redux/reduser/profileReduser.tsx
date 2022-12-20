
export type ProfilePostType = {
    id: number
    text: string
}
/*type StateProfilePostsType={
    posts:Array<ProfilePostType>
    newPost:string
}*/
const initialStateProfilePost={
    posts: [
        {id: 1, text: 'mmmm...'},
        {id: 2, text: 'What is it'},
        {id: 3, text: 'I  come home better'}

    ] as Array<ProfilePostType>,
    newPost:'',
}

export type initialStateProfilePostType = typeof initialStateProfilePost

export const profileReduser= (state:initialStateProfilePostType=initialStateProfilePost,action:ActionType):initialStateProfilePostType=> {

    switch (action.type) {
        case 'ADDED-POST-STATE': {
            return {...state,posts:[{
                id: 4, text: state.newPost},...state.posts]}
        }
        case 'CREATING-POST-IN-TEXTAREA': {

            return {...state,newPost: action.symbolTaxtarea};
        }
        default:return state
    }
}

 type ActionType=ReturnType<typeof addedPostInStateAC>|ReturnType<typeof createTextInTextareaAC>

export const addedPostInStateAC = () =>{
    return {
        type:'ADDED-POST-STATE'
    }as const
}


export const createTextInTextareaAC = (symbolTaxtarea:string) =>{
    return {
        type:'CREATING-POST-IN-TEXTAREA',
        symbolTaxtarea
    }as const
}
