import React from 'react';
import {connect} from "react-redux";
import {StateReduxStorType} from "../../redux/reduser/reduxStor";
import {
    changeIsLoadingAC,
    ParticipanType,
    setActivePageAC,
    setParticipantsAC, setTotalCountAC,
    usefulParticipantAC
} from "../../redux/reduser/participantsReduser";
import {Dispatch} from "redux";
import ParticipantsAxiosQueryComponents from "./ParticipantsAxiosQueryComponents";

const mapStateToPropse = (state: StateReduxStorType):MapStatePropsType => {
    return {
        participants: state.participantsState.participants,
        count: state.participantsState.count,
        totalCount: state.participantsState.totalCount,
        activePage: state.participantsState.activePage,
        isLoading: state.participantsState.isLoading
    }
}


const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        useful: (idPartisipant: number) => (
            dispatch(usefulParticipantAC(idPartisipant))
        ),
        setParticipant: (participants: Array<ParticipanType>) => (
            dispatch(setParticipantsAC(participants))
        ),
        setActivePage:(activePagesNumber:number)=>{
            dispatch(setActivePageAC(activePagesNumber))
        },
        setTotalCount:(totalCount:number)=>{
            dispatch(setTotalCountAC(totalCount))
        },
        changeIsLoading:(loading:boolean)=>{
            dispatch(changeIsLoadingAC(loading))
        }
    }
}

type MapStatePropsType = {
    participants: Array<ParticipanType>
    count:number
    totalCount:number
    activePage:number
    isLoading:boolean
}
type MapDispatchPropsType = {
    useful: (idPartisipant: number) => void
    setParticipant: (participants: Array<ParticipanType>) => void
    setActivePage:(activePagesNumber:number)=>void
    setTotalCount:(totalCount:number)=>void
    changeIsLoading:(loading:boolean)=>void

}

export type ParticipantsPropsType = MapStatePropsType & MapDispatchPropsType

export default connect(mapStateToPropse, mapDispatchToProps)(ParticipantsAxiosQueryComponents)