import {ParticipanType} from "../../redux/reduser/participantsReduser";

export type GetUsersType = {
    error:string
    items: Array<ParticipanType>
    totalCount:number
}

