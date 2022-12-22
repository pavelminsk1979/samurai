import React from 'react';
import {ParticipantsPropsType} from "./ParticipantsContainer";
import axios from "axios";
import {Participants} from './Participants';


class ParticipantsAxiosQueryComponents extends React.Component<ParticipantsPropsType> {

    componentDidMount() {
        axios.get <any, any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.count}`)
            .then((response) => {
                this.props.setParticipant(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    setActivePageHandler(activePagesNumber: number) {
        this.props.setActivePage(activePagesNumber)
        axios.get <any, any>(`https://social-network.samuraijs.com/api/1.0/users?page=${activePagesNumber}&count=${this.props.count}`)
            .then((response) => {
                this.props.setParticipant(response.data.items)
            })
    }

    render() {

        return <Participants
            totalCount={this.props.totalCount}
            count={this.props.count}
            useful={(idPartisipant: any) => this.props.useful(idPartisipant)}
            activePage={this.props.activePage}
            participants={this.props.participants}
            setActivePageHandler={(activePagesNumber: number) => this.setActivePageHandler(activePagesNumber)}
        />
    }
}

export default ParticipantsAxiosQueryComponents



