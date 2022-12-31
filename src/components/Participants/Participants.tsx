import React from 'react';
import userFoto from '../../assets/images/blackMan.jpg'
import st from './Participant.module.css'
import {NavLink} from 'react-router-dom';
import {followAPI, ParticipanType} from "../../api/api";


type ParticipantsType = {
    totalCount: number
    count: number
    followParticipant: (id: number) => void
    unFollowParticipant: (id: number) => void
    activePage: number
    participants: Array<ParticipanType>
    setActivePageHandler: (activePagesNumber: number) => void
    changeDisabledStatus: (userId:number,value:boolean) => void
    disabled:Array<number>
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
                                      ? <button disabled={props.disabled.some(elem=>elem===el.id)}
                                                onClick={() => {
                                                    props.changeDisabledStatus(el.id,true)
                                                    followAPI.deleteFollow(el.id)
                                                        .then(data => {
                                                            if (data.resultCode === 0) {
                                                                props.unFollowParticipant(el.id)
                                                            }
                                                            props.changeDisabledStatus(el.id,false)
                                                        })
                                                }
                                                }>FRIEND</button>

                                      : <button disabled={props.disabled.some(elem=>elem===el.id)}
                                                onClick={() => {
                                                    props.changeDisabledStatus(el.id,true)
                                                    followAPI.postFollow(el.id)
                                                        .then(data => {
                                                            if (data.resultCode === 0) {
                                                                props.followParticipant(el.id)
                                                            }
                                                            props.changeDisabledStatus(el.id,false)
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
