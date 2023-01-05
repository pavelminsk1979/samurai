import {connect} from "react-redux";
import {StateType} from "../../redux/reduser/reduxStore";
import {
    deleteFriend,
    getPaticipants,
    setFriend, showPaticipants
} from "../../redux/reduser/participantReduсer";
import ParticipantsAxiosQueryComponents from "./ParticipantsAxiosQueryComponents";
import { ParticipanType } from "../../api/api";
import {HocRedirectLogin} from "../../hoc/RedirectLogin";
import {compose} from "redux";
import {FC} from "react";



const mapStateToPropse = (state: StateType): MapStatePropsType => {
    return {
        participants: state.participantState.participants,
        count: state.participantState.count,
        totalCount: state.participantState.totalCount,
        activePage: state.participantState.activePage,
        isLoading: state.participantState.isLoading,
        disabled:state.participantState.disabled,

    }
}

type MapStatePropsType = {
    participants: Array<ParticipanType>
    count: number
    totalCount: number
    activePage: number
    isLoading: boolean
    disabled: Array<number>

}
type MapDispatchPropsType = {
    showPaticipants: (activePage:number ,count:number) => void
    getPaticipants:(activePage:number ,count:number)=>void
    deleteFriend:(idPartisipant: number)=>void
    setFriend:(idPartisipant: number)=>void
}

export type ParticipantsPropsType = MapStatePropsType & MapDispatchPropsType


export default compose<FC>(
    connect(mapStateToPropse, {
        setFriend,
        deleteFriend,
        getPaticipants,
        showPaticipants,
    }),
    HocRedirectLogin
)(ParticipantsAxiosQueryComponents)

