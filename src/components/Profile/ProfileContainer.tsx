import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/reduser/reduxStor";
import {setProfileUsers} from "../../redux/reduser/profileReduser";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {GetProfileType} from "../../common/Types/getProfileType";


type PathParamsType = {
    userId:string
}

type ResultProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<ResultProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get<GetProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
            withCredentials: true, headers: {
                'API-KEY': 'b48cd3f5-7cda-4a22-b331-9292412429bd'
            }
        })
            .then((response) => {
                this.props.setProfileUsers(response.data)
            })
    }

    render() {
        return (
            <Profile
                profileUser={this.props.profileUser}
            />
        )
    }
}

let MapStateProps = (state: StateType): MapStatePropsType => {
    return {
        profileUser: state.profileState.profileUser
    }
}

type MapDispatchPropsType = {
    setProfileUsers: (profileUser: GetProfileType) => void
}

type MapStatePropsType = {
    profileUser: GetProfileType
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType


let WithDataContainerComponent = withRouter(ProfileContainer)

export default connect(MapStateProps, {setProfileUsers})(WithDataContainerComponent)