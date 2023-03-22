import React from 'react'
import s from "./Dialogs.module.css"
import {DialogItem} from "./Dialogitem/Dialogsitem";
import {Message} from "./Message/Massage";
import {DialogItemType, DialogMessageType} from "../../redux/State";

type DialogsPropsType = {
    state: DialogMessageType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.state.messages.map(mess => <Message message={mess.message} id={mess.id}/>)

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