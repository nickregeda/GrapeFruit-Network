import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Form, Field} from "formik";
import {Formik} from "formik";
import dialogsFormSchema from "../FormValidation/DialogsFormSchema";

const DialogsForm = (props) => {
    let maxMessageTextLength = 1000;
    return (
        <Form className={s.sendBlock}>
            <Field name={'newMessage'}
                   as={'textarea'}
                   maxLength={maxMessageTextLength + 1} //for validation test
                   placeholder='New message...'/>
            <button disabled={props.newMessage.length > 1000 || !props.newMessage}>Send</button>
            <div>{props.newMessage.length}/{maxMessageTextLength}</div>
        </Form>
    )
}

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>);

    let onSendMessage = (newMessage) => {
        props.sendMessage(newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <Formik
                initialValues={{newMessage: ''}}
                validationSchema={dialogsFormSchema}
                onSubmit={(values, {resetForm}) => {
                    onSendMessage(values.newMessage);
                    resetForm({newMessage: ''});
                }}
            >
                {({values}) => (
                    <DialogsForm newMessage={values.newMessage}/>
                )}
            </Formik>
        </div>
    );
}

export default Dialogs;