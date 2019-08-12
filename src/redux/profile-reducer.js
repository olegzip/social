const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: "How are you POST", likesCount: 12},
    {id: 2, message: "Ok POST", likesCount: 7},
    {id: 2, message: "Blablablaaa POST", likesCount: 1},
    {id: 2, message: "One more POST", likesCount: 3},
  ],
  newPostText: '',
}

const profileReducer = (state=initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {id: state.posts.length + 1, message: state.newPostText, likesCount: 0};
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText});

export default profileReducer;
