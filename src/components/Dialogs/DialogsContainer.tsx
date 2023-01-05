import {
    addedMessageStatetAC, creatingMessageinTextareaAC, MessageType, UserNameType
} from "../../redux/reduser/dialogReduсer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {StateType} from "../../redux/reduser/reduxStore";
import {compose, Dispatch} from "redux";
import React, {FC} from "react";
import {HocRedirectLogin} from "../../hoc/RedirectLogin";


const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        userName: state.dialogState.userName,
        newMessageForState: state.dialogState.newMessageForState,
        messageState: state.dialogState.messageState
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addedMessageStatet: () => {
            dispatch(addedMessageStatetAC())
        },
        creatingMessageinTextarea: (textTexterea: string) => {
            dispatch(creatingMessageinTextareaAC(textTexterea))
        }

    }
}
type MapStatePropsType = {
    userName: Array<UserNameType>
    newMessageForState: string
    messageState: Array<MessageType>
}
type MapDispatchPropsType = {
    addedMessageStatet: () => void
    creatingMessageinTextarea: (textTexterea: string) => void
}

export type DialogsType = MapStatePropsType & MapDispatchPropsType

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    HocRedirectLogin
)(Dialogs)





