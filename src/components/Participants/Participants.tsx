import React from 'react';
import userFoto from '../../assets/images/blackMan.jpg'
import st from './Participant.module.css'
import {ParticipanType} from "../../redux/reduser/participantsReduser";
import {NavLink} from 'react-router-dom';
import axios from "axios";


type ParticipantsType = {
    totalCount: number
    count: number
    followParticipant: (id: number) => void
    unFollowParticipant: (id: number) => void
    activePage: number
    participants: Array<ParticipanType>
    setActivePageHandler: (activePagesNumber: number) => void
}

export const Participants = (props: ParticipantsType) => {

    let pageCountNumber = Math.ceil(props.totalCount / props.count)
    /* количество страниц с сервера ожидаю*/
    let pageCount = []
    for (let i = 1; i <= pageCountNumber; i++) {
        pageCount.push(i)
    }

    return (
        <div>

            {
                pageCount.map(e => {
                    return (
                        <span>
                                <button
                                    onClick={() => {
                                        props.setActivePageHandler(e)
                                    }}
                                    className={
                                        props.activePage === e ? st.paginationButton : ''}
                                >{e}</button>
                            </span>
                    )
                })
            }

            {
                props.participants.map(el => {
                    return (
                        <div key={el.id}>
                          <span>
                              <div>
                                  <NavLink to={'/profile/' + el.id}>
                           <img src={el.photos.small !== null
                               ? el.photos.small
                               : userFoto}
                                className={st.photo}
                                alt={'user photo'}
                           />
                                      </NavLink>
                              </div>
                              {
                                  el.followed
                                      ? <button onClick={() => {
                                          let userId = el.id
                                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                                              withCredentials: true, headers: {
                                                  'API-KEY': 'b48cd3f5-7cda-4a22-b331-9292412429bd'
                                              }
                                          })
                                              .then(response => {
                                                  if (response.data.resultCode === 0) {
                                                      props.unFollowParticipant(el.id)
                                                  }
                                              })
                                      }
                                      }>FRIEND</button>

                                      : <button onClick={() => {
                                          let userId = el.id
                                          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
                                              withCredentials: true, headers: {
                                                  'API-KEY': 'b48cd3f5-7cda-4a22-b331-9292412429bd'
                                              }
                                          })
                                              .then(response => {
                                                  if (response.data.resultCode === 0) {
                                                      props.followParticipant(el.id)
                                                  }
                                              })
                                      }
                                      }>PERSON</button>
                              }

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
