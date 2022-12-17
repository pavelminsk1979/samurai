import React from 'react';
import {
    addedMessageStatetAC, creatingMessageinTextareaAC, MessageType, UserNameType
} from "../../redux/reduser/dialogsReduser";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";



const mapStateToProps= (state:any) => {
    return{
        userName:state.dialogsState.userName,
        newMessageForState:state.dialogsState.newMessageForState,
    messageState:state.dialogsState.messageState,
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return{
        addedMessageStatet:()=>{
            dispatch(addedMessageStatetAC())
        },
        creatingMessageinTextarea:(textTexterea:string)=>{
            dispatch(creatingMessageinTextareaAC(textTexterea))
        }

}
}
type MapStatePropsType = {
    userName:Array<UserNameType>
    newMessageForState:string
    messageState:Array<MessageType>
}
type MapDispatchPropsType = {
    addedMessageStatet:()=>void
    creatingMessageinTextarea:(textTexterea:string)=>void
}
export type DialogsType = MapStatePropsType & MapDispatchPropsType

export default connect(mapStateToProps,mapDispatchToProps)(Dialogs)
