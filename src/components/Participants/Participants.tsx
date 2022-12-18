import React from 'react';
import {ParticipantsPropsType} from "./ParticipantsContainer";
import axios from "axios";
import userFoto from '../../assets/images/blackMan.jpg'
import st from './Participant.module.css'
/*import * as  axios from "axios";*/


export const Participants = (props: ParticipantsPropsType) => {

    const showPaticipantHandler = () => {
        if (props.participants.length === 4) {
            axios.get <any, any>('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    props.setParticipant(response.data.items)
                })
        }
    }


    const onClickHandler = (idPartisipant: number) => {
        props.useful(idPartisipant)
    }
    return (
        <div>
            <button onClick={showPaticipantHandler}> Show paticipant</button>
            {
                props.participants.map(el => {
                    let nameButton
                    if (el.useful === true) {
                        nameButton = 'friend'
                    } else {
                        nameButton = 'peron'
                    }
                    return (
                        <div key={el.id}>
                          <span>
                              <div >
                           <img src={el.photos.small !== null
                               ? el.photos.small
                               : userFoto}
                                className={st.photo}
                           />
                              </div>

                                  <button
                                      onClick={() => onClickHandler(
                                          el.id)}>{nameButton}</button>

                          </span>
                            <span>

                                <span>{el.name}</span>
                                <span>. - </span>
                                <span>{el.status}</span>

                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}