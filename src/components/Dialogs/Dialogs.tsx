import React from 'react'
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {message} from "antd";
import {DialogItem} from "./Dialogitem/Dialogsitem";


type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
    id: number
}




const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props: DialogItemType) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: 'How are you it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

    let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = messagesData.map(mess => <Message message={mess.message} id={mess.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                    {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}
export default Dialogs;