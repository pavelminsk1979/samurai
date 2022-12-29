import React from "react";
import { HeaderType } from "./HeaderContainer";
import axios from "axios";
import { getLoginAuthMeType } from "../../common/Types/getLoginAuthMeType";
import { Header } from "./Header";

class HeaderAxiosQueryComponent extends React.Component<HeaderType> {

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
export default HeaderAxiosQueryComponent