import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateReduxStorType} from "../../redux/reduser/reduxStor";
import { setProfileUsers } from "../../redux/reduser/profileReduser";


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get <any, any>(`https://social-network.samuraijs.com/api/1.0/profile/27194`)
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

let MapStatePropsType = (state:StateReduxStorType) => {
    return {
        profileUser : state.profileState.profileUser
    }
}

export default connect(MapStatePropsType,{setProfileUsers})(ProfileContainer)