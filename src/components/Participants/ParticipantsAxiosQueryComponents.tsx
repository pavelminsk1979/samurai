import React from 'react';
import {ParticipantsPropsType} from "./ParticipantsContainer";
import {Participants} from './Participants';
import {Loading} from "../../common/components/Loading";
import {usersAPI} from "../../api/api";


class ParticipantsAxiosQueryComponents extends React.Component<ParticipantsPropsType> {

    componentDidMount() {
        this.props.changeIsLoading(true)

        usersAPI.getParticipants(this.props.activePage, this.props.count)
            .then((data) => {
                this.props.changeIsLoading(false)
                this.props.setParticipants(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    setActivePageHandler(activePagesNumber: number) {
        this.props.changeIsLoading(true)
        this.props.setActivePage(activePagesNumber)

        usersAPI.getParticipants(activePagesNumber, this.props.count)
            .then((data) => {
                this.props.changeIsLoading(false)
                this.props.setParticipants(data.items)
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



