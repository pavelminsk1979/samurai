import {LoginAuthMeType} from "../../common/Types/getLoginAuthMeType";

const initialState = {
    id: null as null | number,
    login: null as null | string,
    email: null as null | string,
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
    debugger
    return {
        type: 'SET-DATA-LOGIN-WITH-SERVER',
        dataLoginWithServer
    } as const
}


