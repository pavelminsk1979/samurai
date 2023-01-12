import {authAPI, DataAuthMeType} from "../../api/api";
import {Dispatch} from "redux";


const initialState = {
    id: 1,
    login: '',
    email: '',
    isLogin: false
}

export type initialStateType = typeof initialState

export const authReduсer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
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
export const setDataLoginWithServer = (dataLoginWithServer: DataAuthMeType) => {
    return {
        type: 'SET-DATA-LOGIN-WITH-SERVER',
        dataLoginWithServer
    } as const
}

/*thunk*/
export const getAuthMe = () => (dispatch: Dispatch) => {
    authAPI.getAuthMe()
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setDataLoginWithServer(data.data))
            }
        })
}


