import {combineReducers, createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogsReduser} from "./dialogsReduser";

const commonReduser=combineReducers({
    profilePost:profileReduser,
    dialogsMessageUser:dialogsReduser,
})

export const store=createStore(commonReduser)

export type StateReduxStorType=ReturnType<typeof commonReduser>