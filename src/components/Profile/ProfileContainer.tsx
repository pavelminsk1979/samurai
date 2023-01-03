import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/reduser/reduxStore";
import {getProfiles} from "../../redux/reduser/profileReduсer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfilesType} from "../../api/api";


type PathParamsType = {
    userId: string
}

type ResultProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<ResultProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfiles(userId)
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
    getProfiles: (userId: string) => void
}

type MapStatePropsType = {
    profileUser: ProfilesType
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType


let WithDataContainerComponent = withRouter(ProfileContainer)

export default connect(MapStateProps, {getProfiles})(WithDataContainerComponent)