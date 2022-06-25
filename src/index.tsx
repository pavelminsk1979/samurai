import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

export type TextForPostType = {
    id: number
    text: string
}
const message = [
    {id: 1, text: 'mmmm...'},
    {id: 2, text: 'What is it'},
    {id: 3, text: 'I  come home better'}
]

export type UserType = {
    name: string
    idName: number
}
const user = [
    {idName: 1, name: 'Pavel'},
    {idName: 2, name: 'Olga'},
    {idName: 3, name: 'Inokenti'},
    {idName: 4, name: 'Sonia'},
    {idName: 5, name: 'Kuzma'}
]

export type MessageUserType={
    id:number
    message:string
}
const messageUser = [
    {id: 1, message: 'Help me with money'},
    {id: 2, message: 'Ooooh...'},
    {id: 3, message: 'I want to buy a car'},
    {id: 4, message: 'Mercedes?'},
    {id: 5, message: 'Ou-Ou! I also want money'}
]

ReactDOM.render(
    <App
        messageUser={messageUser}
        user={user}
        message={message}/>,
  document.getElementById('root')
);