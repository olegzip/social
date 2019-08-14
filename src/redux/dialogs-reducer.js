const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Semen NAME'},
    {id: 2, name: 'Oleg NAME'},
    {id: 3, name: 'Serj NAME'},
    {id: 4, name: 'John NAME'},
    {id: 5, name: 'BB NAME'},
    {id: 6, name: 'AA NAME'}
  ],
  messages: [
    {id: 1, message: "Hello MESSAGE"},
    {id: 2, message: "Yo MESSAGE"},
    {id: 3, message: "Yoyoyo MESSAGE"},
  ],
  newMessageBody: "",
}

const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:{
      let newMessage = {id: state.messages.length + 1, message: action.newMessageBody}
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      stateCopy.newMessageBody = '';
      stateCopy.messages.push(newMessage);
      debugger;
      return stateCopy;}
    case UPDATE_NEW_MESSAGE_BODY:{
      let stateCopy = {...state};
      stateCopy.newMessageBody = action.newMessageBody;
      return stateCopy;}
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (newMessageBody) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: newMessageBody.newMessageBody});

export default dialogsReducer;