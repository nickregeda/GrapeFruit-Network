import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>);

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.currentTarget.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.sendBlock}>
                <textarea onChange={onMessageChange} placeholder='New message...'
                          value={state.newMessageText} /*{ref={newMessageElement}}*/></textarea>
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;