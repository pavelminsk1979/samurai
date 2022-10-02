import React from 'react';
import {Participants} from "./Participants";
import {connect} from "react-redux";
import {StateReduxStorType} from "../../redux/reduser/reduxStor";
import {ParticipanType, setParticipantsAC, usefulParticipantAC} from "../../redux/reduser/participantsReduser";

const mapStateToPropse = (state: StateReduxStorType) => {
    return {
        participants: state.participantsState.participants
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        useful: (idPartisipant: number) => (
            dispatch(usefulParticipantAC(idPartisipant))
        ),
        setParticipant: (participants: Array<ParticipanType>) => (
            dispatch(setParticipantsAC(participants))
        )
    }
}

type MapStatePropsType = {
    participants: Array<ParticipanType>
}
type MapDispatchPropsType = {
    useful: (idPartisipant: number) => void
    setParticipant: (participants: Array<ParticipanType>) => void
}

export type ParticipantsPropsType = MapStatePropsType & MapDispatchPropsType

export default connect(mapStateToPropse, mapDispatchToProps)(Participants)