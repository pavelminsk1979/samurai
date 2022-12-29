
import {connect} from "react-redux";
import {setDataLoginWithServer} from "../../redux/reduser/authReduser";
import { LoginAuthMeType} from "../../common/Types/getLoginAuthMeType";
import {StateType} from "../../redux/reduser/reduxStor";
import HeaderAxiosQueryComponent from "./HeaderAxiosQueryComponent";


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
    id:  number
    login:  string
    email:  string
}
type MapDispatchToPropsType = {
    setDataLoginWithServer: (dataLoginWithServer: LoginAuthMeType) => void
}
export type HeaderType = mapStateToPropseType & MapDispatchToPropsType

export default connect(mapStateToPropse, {setDataLoginWithServer})(HeaderAxiosQueryComponent)