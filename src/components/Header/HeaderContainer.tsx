import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setDataLoginWithServer} from "../../redux/reduser/authReduser";
import {getLoginAuthMeType, LoginAuthMeType} from "../../common/Types/getLoginAuthMeType";
import {StateType} from "../../redux/reduser/reduxStor";


class HeaderComponent extends React.Component<HeaderType> {

    componentDidMount() {
        axios.get <getLoginAuthMeType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setDataLoginWithServer(response.data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}
                       isLogin={this.props.isLogin}
                       id={this.props.id}
                       login={this.props.login}
                       email={this.props.email}
                       setDataLoginWithServer={this.props.setDataLoginWithServer}
        />

    }
}


const mapStateToPropse = (state: StateType): mapStateToPropseType => {
    return {
        isLogin: state.auth.isLogin,
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email
    }
}

export type mapStateToPropseType = {
    isLogin: boolean
    id: null | number
    login: null | string
    email: null | string
}
type MapDispatchToPropsType = {
    setDataLoginWithServer: (dataLoginWithServer: LoginAuthMeType) => void
}
export type HeaderType = mapStateToPropseType & MapDispatchToPropsType

export default connect(mapStateToPropse, {setDataLoginWithServer})(HeaderComponent)