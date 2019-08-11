import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "How are you POST", likesCount: 12},
        {id: 2, message: "Ok POST", likesCount: 7},
        {id: 2, message: "Blablablaaa POST", likesCount: 1},
        {id: 2, message: "One more POST", likesCount: 3},
      ],
      newPostText: ''
    },
    dialogsPage: {
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
    },
  },

  _callSubscriber() {
    console.log('state changed!')
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._callSubscriber(this._state);
  }
};

export default store;
// window.store = store;