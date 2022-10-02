import React from 'react';
import {ParticipanType} from "../../redux/reduser/participantsReduser";
import {ParticipantsPropsType} from "./ParticipantsContainer";

// type ParticipantsComponentType = {
//     participants: Array<ParticipanType>
//     useful: () => void
//     setParticipant: () => void
//
// }
export const Participants = (props: ParticipantsPropsType) => {
    return (
        <div>
            {
                props.participants.map(el => {
                    return (
                        <div key={el.id}>
                          <span>
                              <div>

                              </div>
                              <div>

                              </div>
                          </span>
                            <span>
                              <div>{el.name}</div>
                              <div>{el.status}</div>
                          </span>
                        </div>
                    )
                })
            }
        </div>
    )
}