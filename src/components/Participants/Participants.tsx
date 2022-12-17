import React from 'react';

import {ParticipantsPropsType} from "./ParticipantsContainer";



export const Participants = (props: ParticipantsPropsType) => {
    const onClickHandler = (idPartisipant:number) => {
        props.useful(idPartisipant)
    }
    return (
        <div>
            {
                props.participants.map(el => {
                    let nameButton
                 if(el.useful===true){
                     nameButton='friend'
                 } else {nameButton='peron'}
                    return (
                        <div key={el.id}>
                          <span>
                              <div>

                              </div>
                              <div>

                              </div>
                          </span>
                            <div>
                                <button
                                    onClick={()=>onClickHandler(
                                        el.id)}>{nameButton}</button>
                              <span>{el.name}</span>
                                <span>. - </span>
                              <span>{el.status}</span>

                          </div>
                        </div>
                    )
                })
            }
        </div>
    )
}