import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setDataLoginWithServer} from "../../redux/reduser/authReduser";



class HeaderComponent extends React.Component<any> {

    componentDidMount() {
        axios.get <any, any>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
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


const mapStateToPropse = (state: any) => {
    return {
        isLogin: state.auth.isLogin,
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email
    }
}

export type mapStateToPropseType = {
    isLogin: any
    id: any
    login: any
    email: any
}
type MapDispatchToPropsType ={
    setDataLoginWithServer:(dataLoginWithServer:any)=>void
}
export type HeaderType = mapStateToPropseType & MapDispatchToPropsType

export default connect(mapStateToPropse, {setDataLoginWithServer})(HeaderComponent)