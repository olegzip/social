import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {


  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
    .map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);

  let messagesElements = state.messages
    .map(m => <Message key={m.id} message={m.message}/>);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
  }

  return (
    <div className='content'>
      <div className={styles.dialogs}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
      <div>
        <button>Send Message</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;