import {MyPost} from "./MyPost";
import {addedPostInStateAC, createTextInTextareaAC, ProfilePostType} from "../../../redux/reduser/profileReduser";
import {connect} from "react-redux";



const mapStateToProps= (state:any) => {
    return{
        posts:state.profileState.posts,
        newPost:state.profileState.newPost
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return{
        createTextInTextarea:(symbol:any)=>{
            dispatch(createTextInTextareaAC(symbol))
        },
        addedPostInState:()=>{
            dispatch(addedPostInStateAC())
        }
    }
}
type MapStatePropsType = {
    posts: Array<ProfilePostType>
    newPost: string
}
type MapDispatchPropsType = {
    createTextInTextarea:(symbol:string)=>void
    addedPostInState:()=>void
}
export type MyPostType = MapStatePropsType & MapDispatchPropsType


export default connect(mapStateToProps,mapDispatchToProps)(MyPost)




