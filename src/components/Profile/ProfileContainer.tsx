import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/reduser/reduxStore";
import {setProfileUsers} from "../../redux/reduser/profileReduсer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profilesAPI, ProfilesType} from "../../api/api";


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
        profilesAPI.getProfiles(userId)
            .then((data) => {
                this.props.setProfileUsers(data)
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
    setProfileUsers: (profileUser: ProfilesType) => void
}

type MapStatePropsType = {
    profileUser: ProfilesType
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType


let WithDataContainerComponent = withRouter(ProfileContainer)

export default connect(MapStateProps, {setProfileUsers})(WithDataContainerComponent)