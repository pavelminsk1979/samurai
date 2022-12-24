import React from 'react';
import {connect} from "react-redux";
import {StateReduxStorType} from "../../redux/reduser/reduxStor";
import {
    changeIsLoading,
    ParticipanType,
    setActivePage,
    setParticipants, setTotalCount,
    usefulParticipant
} from "../../redux/reduser/participantsReduser";
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

type MapStatePropsType = {
    participants: Array<ParticipanType>
    count:number
    totalCount:number
    activePage:number
    isLoading:boolean
}
type MapDispatchPropsType = {
    usefulParticipant: (idPartisipant: number) => void
    setParticipants: (participants: Array<ParticipanType>) => void
    setActivePage:(activePagesNumber:number)=>void
    setTotalCount:(totalCount:number)=>void
    changeIsLoading:(loading:boolean)=>void

}

export type ParticipantsPropsType = MapStatePropsType & MapDispatchPropsType

export default connect(mapStateToPropse, {usefulParticipant,setParticipants,setActivePage,setTotalCount,changeIsLoading})(ParticipantsAxiosQueryComponents)