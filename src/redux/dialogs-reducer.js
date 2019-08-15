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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.newMessageBody
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {id: state.messages.length + 1, message: state.newMessageBody}
        ],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (args) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newMessageBody: args.target.value
});

export default dialogsReducer;