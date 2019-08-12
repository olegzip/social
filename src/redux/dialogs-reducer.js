const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Semen NAME'},
    {id: 2, name: 'sdfdsf NAME'},
    {id: 3, name: 'eveg NAME'},
    {id: 4, name: 'cvbcvxb NAME'},
    {id: 5, name: 'jk;ljl NAME'},
    {id: 6, name: 'qwewe NAME'}
  ],
  messages: [
    {id: 1, message: "Hello MESSAGE"},
    {id: 2, message: "Yo MESSAGE"},
    {id: 3, message: "Yoyoyo MESSAGE"},
  ],
  newMessageBody: '',
}

const dialogsReducer = (state=initialState, action) => {
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