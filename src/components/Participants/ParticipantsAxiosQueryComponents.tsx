import React from 'react';
import {ParticipantsPropsType} from "./ParticipantsContainer";
import axios from "axios";
import {Participants} from './Participants';
import {Loading} from "../../common/components/Loading";


class ParticipantsAxiosQueryComponents extends React.Component<ParticipantsPropsType> {

    componentDidMount() {
        this.props.changeIsLoading(true)
        axios.get <any, any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.count}`)
            .then((response) => {
                this.props.changeIsLoading(false)
                this.props.setParticipant(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    setActivePageHandler(activePagesNumber: number) {
        this.props.changeIsLoading(true)
        this.props.setActivePage(activePagesNumber)
        axios.get <any, any>(`https://social-network.samuraijs.com/api/1.0/users?page=${activePagesNumber}&count=${this.props.count}`)
            .then((response) => {
                this.props.changeIsLoading(false)
                this.props.setParticipant(response.data.items)
            })
    }

    render() {

        return <>
            {this.props.isLoading&& <Loading/>}

            <Participants
                totalCount={this.props.totalCount}
                count={this.props.count}
                useful={(idPartisipant: any) => this.props.useful(idPartisipant)}
                activePage={this.props.activePage}
                participants={this.props.participants}
                setActivePageHandler={(activePagesNumber: number) => this.setActivePageHandler(activePagesNumber)}
            />
        </>

    }
}

export default ParticipantsAxiosQueryComponents



