import React, {FC} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/reduser/reduxStore";
import {getProfiles, getStatus, updateStatusMyProfile} from "../../redux/reduser/profileReduсer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {ProfilesType} from "../../api/api";
import {HocRedirectLogin} from "../../hoc/RedirectLogin";
import {compose} from "redux";


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
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile
                updateStatusMyProfile={this.props.updateStatusMyProfile}
                profileUser={this.props.profileUser}
                status={this.props.status}
            />
        )
    }
}


let MapStateProps = (state: StateType): MapStatePropsType => {
    return {
        profileUser: state.profileState.profileUser,
        status:state.profileState.status

    }
}


type MapDispatchPropsType = {
    getProfiles: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatusMyProfile:(status: string) => void
}

type MapStatePropsType = {
    profileUser: ProfilesType
    status:string
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType


export default compose<FC>(
    connect(MapStateProps, {getProfiles,getStatus,updateStatusMyProfile}),
    withRouter,
    HocRedirectLogin)(ProfileContainer)

