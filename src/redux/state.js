let rerenderEntireTree = () => {
  console.log('state changed!')
};

let state = {
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
    ], messages: [
      {id: 1, message: "Hello MESSAGE"},
      {id: 2, message: "Yo MESSAGE"},
      {id: 3, message: "Yoyoyo MESSAGE"},]
  },
};

export const addPost = () => {
  let newPost = {id:5, message: state.profilePage.newPostText, likesCount:11};
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
 rerenderEntireTree = observer;
}

export default state;