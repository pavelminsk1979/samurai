import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateReduxStorType} from "../../redux/reduser/reduxStor";
import { setProfileUsers } from "../../redux/reduser/profileReduser";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){userId=2}
        axios.get <any, any>(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then((response) => {
                this.props.setProfileUsers(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}
                profileUser={this.props.profileUser}
            />
        )
    }
}

let MapStateProps = (state:StateReduxStorType)=> {
    return {
        profileUser : state.profileState.profileUser
    }
}

/*type MapStatePropsType = {
    profileUser:GetProfileType
}
type MapDispatchPropsType = {
    setProfileUsers:(profileUser:GetProfileType)=>void
}
export  type ProfilePropsType = MapStatePropsType & MapDispatchPropsType*/

let WithURLComponent = withRouter(ProfileContainer)

export default connect(MapStateProps,{setProfileUsers})(WithURLComponent)