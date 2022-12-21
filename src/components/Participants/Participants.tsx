import React from 'react';
import {ParticipantsPropsType} from "./ParticipantsContainer";
import axios from "axios";
import userFoto from '../../assets/images/blackMan.jpg'
import st from './Participant.module.css'


class Participants extends React.Component<ParticipantsPropsType> {

    componentDidMount() {
        axios.get <any, any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.count}`)
            .then((response) => {
                this.props.setParticipant(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    setActivePageHandler(activePagesNumber:number){
        this.props.setActivePage(activePagesNumber)
        axios.get <any, any>(`https://social-network.samuraijs.com/api/1.0/users?page=${activePagesNumber}&count=${this.props.count}`)
            .then((response) => {
                this.props.setParticipant(response.data.items)
            })
    }

    onClickHandler = (idPartisipant: number) => {
        this.props.useful(idPartisipant)
    }

    render() {
        let pageCountNumber = Math.ceil(this.props.totalCount / this.props.count)
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
                            <span >
                                <button
                                    onClick={()=>{
                                        this.setActivePageHandler(e) }}
                                    className={
                                    this.props.activePage===e ?st.paginationButton:''}
                                >{e}</button>
                            </span>
                        )
                    })
                }

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
