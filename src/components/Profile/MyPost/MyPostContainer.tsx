import {MyPost} from "./MyPost";
import {addedPostInStateAC, createTextInTextareaAC, ProfilePostType} from "../../../redux/reduser/profileReduсer";
import {connect} from "react-redux";
import {StateType} from "../../../redux/reduser/reduxStore";
import {Dispatch} from "redux";



const mapStateToProps= (state:StateType):MapStatePropsType => {
    return{
        posts:state.profileState.posts,
        newPost:state.profileState.newPost,
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return{
        createTextInTextarea:(symbol:string)=>{
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




