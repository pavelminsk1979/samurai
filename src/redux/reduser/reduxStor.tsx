import {combineReducers, createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogsReduser} from "./dialogsReduser";
import {participantsReduser} from "./participantsReduser";
import {authReduser} from "./authReduser";

const commonReduser=combineReducers({
    profileState:profileReduser,
    dialogsState:dialogsReduser,
    participantsState:participantsReduser,
    auth:authReduser
})

export const store=createStore(commonReduser)

export type StateReduxStorType=ReturnType<typeof commonReduser>

// @ts-ignore
window.store = store