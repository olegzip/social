import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControls/FormsControl";
import {maxLength, required} from "../../utils/validators/validator";

const Dialogs = (props) => {
  
  
  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogs
    .map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
  
  let messagesElements = state.messages
    .map(m => <Message key={m.id} message={m.message}/>);
  
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  
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
};

let maxLength50 = maxLength(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             name={'newMessageBody'}
             placeholder={'Enter your message'}
             validate={[required, maxLength50]}
      />
      <div>
        <button>Send Message</button>
      </div>
    </form>
  )
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;