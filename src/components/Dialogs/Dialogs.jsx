import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs
    .map(d => <DialogItem id={d.id} name={d.name}/>);

  let messagesElements = state.messages
    .map(m => <Message message={m.message}/>);

  let newMessageBody = state.newMessageBody;

  let onSendMessageButtonClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let messageBody = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(messageBody));
  };


  return (
    <div className='content'>
      <div className={styles.dialogs}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
                        <textarea
                          value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder="Enter your message...">
                        </textarea>
          </div>
          <div>
            <button onClick={onSendMessageButtonClick}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;