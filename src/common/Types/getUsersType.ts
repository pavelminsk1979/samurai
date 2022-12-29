import {ParticipanType} from "../../redux/reduser/participantsReduser";

export type GetUsersType = {
    error: null|string
    items: Array<ParticipanType>
    totalCount:number
}

