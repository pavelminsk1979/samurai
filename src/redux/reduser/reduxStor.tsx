import {combineReducers, createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogsReduser} from "./dialogsReduser";
import {participantsReduser} from "./participantsReduser";

const commonReduser=combineReducers({
    profilePost:profileReduser,
    dialogsMessageUser:dialogsReduser,
    participantsState:participantsReduser
})

export const store=createStore(commonReduser)

export type StateReduxStorType=ReturnType<typeof commonReduser>