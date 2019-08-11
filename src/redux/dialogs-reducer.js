const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.messageBody;
      return state;
    case SEND_MESSAGE:
      let messageBody = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: state.messages.length + 1, message: messageBody});
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (messageBody) => ({type: UPDATE_NEW_MESSAGE_BODY, messageBody: messageBody});

export default dialogsReducer;