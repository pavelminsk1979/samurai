import React, {ChangeEvent} from "react";
import st from './CreatingTextForPost.module.css'
import {ActionType} from "../../../../State";

export type CreatingTextForPostType={
    dispatch:(action:ActionType)=>void
    valueTaxtarea:string
}

export function CreatingTextForPost(props:CreatingTextForPostType) {


    const onChangeTextarea = (event:ChangeEvent<HTMLTextAreaElement>) => {
        const action ={type:'CHANGE-IN-TEXTERIA',valueTaxtarea:event.currentTarget.value}as const
props.dispatch(action)
    }

    const creatingMessageHandler = () => {
        const action = {type:'ADDED-POST'}as const
        props.dispatch(action)
        const action1 ={type:'CHANGE-IN-TEXTERIA',valueTaxtarea:''}as const
        props.dispatch(action1)
       }


    return(
        <div>
            <div className={st.title}>
                My post
            </div>
            <div>
                <textarea
                    value={props.valueTaxtarea}
                    onChange={onChangeTextarea}/>
                <div>
                    <button
                        onClick={creatingMessageHandler}
                        className={st.button}>added post</button>
                </div>

            </div>

        </div>
    )
}

/*... этот вариант когда целый текст написаный в ТЕКСТЕРИИ попадает через пропсы  в СТЭЙТ...
 А ПРАВИЛЬНО ДЕЛАТЬ КОГДА КАЖДЫЙ СИМВОЛ ДОБАВЛЕНЫЙ В ТЕКСТЕРИЮ ПОПАДАЕТ В СТЭЙТ А ПОТОМ В ОПРЕДЕЛЕННЫЙ МОМЕНТ НАЖАТИЯ НА КНОПКУ ДОБАЛЯЕТСЯ НА СТЕНУ НОВОЕ СООБЩЕНИЕ КОЕ БЫЛО НАПИСАНО В ТЭКСТЕРИИ   {let newTextareaPost=React.createRef<HTMLTextAreaElement>() /!*реакт создай пустую ссылку и воткни ее в эту переменную*!/

    const addedPostHandler = () => {
        props.creatingMessage(newTextareaPost.current ? newTextareaPost.current.value:'---')
    /!*  это потомучто типизация затребовала что мол может быть не только
        строка но и налл... но я говорю что отправлю либо значение либо заглушку....
        или можно короче тот же вариант
        if(newTextareaPost.current){props.creatingMessage(newTextareaPost.current.value)}
        *!/

    /!*    let newPost=newTextareaPost.current?.value /!* если newTextareaPost.current существует
        (не NULL) то возми у newTextareaPost.current значение value.... поэтому --- ?*!/
        props.creatingMessage(newPost);*!/

    }
    return (
        <div>
            <div className={st.title}>
                My post
            </div>
<div>
    <textarea ref={newTextareaPost}></textarea>
    <div>
        <button
            onClick={addedPostHandler}
            className={st.button}>added post</button>
    </div>

</div>

        </div>
    )
}*/