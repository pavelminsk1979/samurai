import React from 'react';
import {ParticipantsPropsType} from "./ParticipantsContainer";
import axios from "axios";
import {Participants} from './Participants';
import {Loading} from "../../common/components/Loading";
import {GetUsersType} from "../../common/Types/getUsersType";


class ParticipantsAxiosQueryComponents extends React.Component<ParticipantsPropsType> {

    componentDidMount() {
        this.props.changeIsLoading(true)
        axios.get <GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.count}`, {
            withCredentials: true, headers: {
                'API-KEY': 'b48cd3f5-7cda-4a22-b331-9292412429bd'
            }
        })
            .then((response) => {
                this.props.changeIsLoading(false)
                this.props.setParticipants(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    setActivePageHandler(activePagesNumber: number) {
        this.props.changeIsLoading(true)
        this.props.setActivePage(activePagesNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePagesNumber}&count=${this.props.count}`, {
            withCredentials: true, headers: {
                'API-KEY': 'b48cd3f5-7cda-4a22-b331-9292412429bd'
            }
        })
            .then((response) => {
                this.props.changeIsLoading(false)
                this.props.setParticipants(response.data.items)
            })
    }

    render() {

        return <>
            {this.props.isLoading && <Loading/>}

            <Participants
                totalCount={this.props.totalCount}
                count={this.props.count}
                followParticipant={(id: number) => this.props.followParticipant(id)}
                unFollowParticipant={(id: number) => this.props.unFollowParticipant(id)}
                activePage={this.props.activePage}
                participants={this.props.participants}
                setActivePageHandler={(activePagesNumber: number) => this.setActivePageHandler(activePagesNumber)}
            />
        </>

    }
}

export default ParticipantsAxiosQueryComponents



