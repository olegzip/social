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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {id: state.messages.length + 1, message: action.newMessageBody}
        ]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;