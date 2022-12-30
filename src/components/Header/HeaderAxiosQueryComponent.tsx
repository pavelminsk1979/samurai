import React from "react";
import { HeaderType } from "./HeaderContainer";
import { Header } from "./Header";
import {authAPI} from "../../api/api";

class HeaderAxiosQueryComponent extends React.Component<HeaderType> {

    componentDidMount() {
        authAPI.getAuthMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    this.props.setDataLoginWithServer(data.data)
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