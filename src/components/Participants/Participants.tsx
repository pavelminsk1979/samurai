import React from 'react';
import userFoto from '../../assets/images/blackMan.jpg'
import st from './Participant.module.css'
import {NavLink, Redirect} from 'react-router-dom';
import {ParticipanType} from "../../api/api";


type ParticipantsType = {
    totalCount: number
    count: number
    activePage: number
    participants: Array<ParticipanType>
    showPaticipants: (activePage: number, count: number) => void
    disabled: Array<number>
    deleteFriend: (idPartisipant: number) => void
    setFriend: (idPartisipant: number) => void
    getPaticipants: (activePage: number, count: number) => void
}

export const Participants = (props: ParticipantsType) => {

    let pageCountNumber = Math.ceil(props.totalCount / props.count)
    /* количество страниц с сервера ожидаю*/
    let pageCount = []
    for (let i = 1; i <= pageCountNumber; i++) {
        pageCount.push(i)
    }

    const setActivePageHandler = (activePage: number) => {
        props.showPaticipants(activePage, props.count)
    }


    return (
        <div>

            {
                pageCount.map(e => {
                    return (
                        <span>
                                <button
                                    onClick={() => {
                                        setActivePageHandler(e)
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
                                      ? <button disabled={props.disabled.some(
                                          elem => elem === el.id)}
                                                onClick={() => {
                                                    props.deleteFriend(el.id)
                                                }
                                                }>FRIEND</button>

                                      : <button disabled={props.disabled.some(
                                          elem => elem === el.id)}
                                                onClick={() => {
                                                    props.setFriend(el.id)
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
