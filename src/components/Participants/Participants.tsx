import React from 'react';
import userFoto from '../../assets/images/blackMan.jpg'
import st from './Participant.module.css'
import {ParticipanType} from "../../redux/reduser/participantsReduser";

type ParticipantsType = {
    totalCount: number
    count: number
    useful: (idPartisipant: number) => void
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

    const onClickHandler = (idPartisipant: number) => {
        props.useful(idPartisipant)
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
                    let nameButton
                    if (el.useful === true) {
                        nameButton = 'friend'
                    } else {
                        nameButton = 'person'
                    }
                    return (
                        <div key={el.id}>
                          <span>
                              <div>
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
