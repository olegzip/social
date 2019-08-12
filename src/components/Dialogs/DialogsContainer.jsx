import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onSendMessageButtonClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let messageBody = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(messageBody));
  };

  return <Dialogs
    updateNewMessageBody={onNewMessageChange}
    sendMessage={onSendMessageButtonClick}
    dialogsPage={state}
  />
}

export default DialogsContainer;