import {LoginAuthMeType} from "../../common/Types/getLoginAuthMeType";

const initialState = {
    id:1,
    login: '',
    email: '',
    isLogin: false
}

export type initialStateType = typeof initialState

export const authReduser = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SET-DATA-LOGIN-WITH-SERVER': {
            return {...state, ...action.dataLoginWithServer, isLogin: true}
        }

        default:
            return state
    }
}

type ActionType = setDataLoginWithServerType

type setDataLoginWithServerType = ReturnType<typeof setDataLoginWithServer>
export const setDataLoginWithServer = (dataLoginWithServer: LoginAuthMeType) => {
    return {
        type: 'SET-DATA-LOGIN-WITH-SERVER',
        dataLoginWithServer
    } as const
}


