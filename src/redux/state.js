const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "How are you POST", likesCount: 12},
        {id: 2, message: "Ok POST", likesCount: 7},
        {id: 2, message: "Blablablaaa POST", likesCount: 1},
        {id: 2, message: "One more POST", likesCount: 3},
      ],
      newPostText: 'BlaBlaBla',
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
    switch (action.type) {
      case ADD_POST:
        let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newPostText;
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_MESSAGE_BODY:
        this._state.dialogsPage.newMessageBody = action.messageBody;
        this._callSubscriber(this._state);
        break;
      default:
        return null;
    }
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => (
  {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
  }
);

export default store;
window.store = store;