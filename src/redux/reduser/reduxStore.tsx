import {combineReducers, createStore} from "redux";
import {profileReduсer} from "./profileReduсer";
import {dialogReduсer} from "./dialogReduсer";
import {participantReduсer} from "./participantReduсer";
import {authReduсer} from "./authReduсer";

const commonReducer = combineReducers({
    profileState: profileReduсer,
    dialogState: dialogReduсer,
    participantState: participantReduсer,
    auth: authReduсer
})

export const store = createStore(commonReducer)

export type StateType = ReturnType<typeof commonReducer>

// @ts-ignore
window.store = store