import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

  return <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();
        let onSendMessageButtonClick = () => {
          store.dispatch(sendMessageCreator());
        }
        let onNewMessageChange = (messageBody) => {
          let action = updateNewMessageBodyCreator(messageBody);
          store.dispatch(action);
        }
        return <Dialogs updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageButtonClick}
                        dialogsPage={state.dialogsPage}/>
      }
    }
  </StoreContext.Consumer>
}

export default DialogsContainer;