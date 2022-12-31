import {connect} from "react-redux";
import {StateType} from "../../redux/reduser/reduxStore";
import {
    changeDisabledValue,
    changeIsLoading, followParticipant,
    setActivePage,
    setParticipants, setTotalCount, unFollowParticipant
} from "../../redux/reduser/participantReduсer";
import ParticipantsAxiosQueryComponents from "./ParticipantsAxiosQueryComponents";
import { ParticipanType } from "../../api/api";


const mapStateToPropse = (state: StateType): MapStatePropsType => {
    return {
        participants: state.participantState.participants,
        count: state.participantState.count,
        totalCount: state.participantState.totalCount,
        activePage: state.participantState.activePage,
        isLoading: state.participantState.isLoading,
        disabled:state.participantState.disabled
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
    followParticipant: (idPartisipant: number) => void
    unFollowParticipant: (idPartisipant: number) => void
    setParticipants: (participants: Array<ParticipanType>) => void
    setActivePage: (activePagesNumber: number) => void
    setTotalCount: (totalCount: number) => void
    changeIsLoading: (loading: boolean) => void
    changeDisabledStatus:(userId:number,value:boolean)=>void

}

export type ParticipantsPropsType = MapStatePropsType & MapDispatchPropsType

export default connect(mapStateToPropse, {
    unFollowParticipant,
    followParticipant,
    setParticipants,
    setActivePage,
    setTotalCount,
    changeIsLoading,
    changeDisabledStatus: changeDisabledValue
})(ParticipantsAxiosQueryComponents)