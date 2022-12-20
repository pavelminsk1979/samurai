import React from 'react';
import {ParticipantsPropsType} from "./ParticipantsContainer";
import axios from "axios";
import userFoto from '../../assets/images/blackMan.jpg'
import st from './Participant.module.css'


class Participants extends React.Component<ParticipantsPropsType> {

    componentDidMount() {
        axios.get <any, any>('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setParticipant(response.data.items)
            })
    }

    onClickHandler = (idPartisipant: number) => {
        this.props.useful(idPartisipant)
    }

    render() {
        return (
            <div>
                {
                    this.props.participants.map(el => {
                        let nameButton
                        if (el.useful === true) {
                            nameButton = 'friend'
                        } else {
                            nameButton = 'peron'
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
                                      onClick={() => this.onClickHandler(
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
}

export default Participants
