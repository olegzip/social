const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: [
    {id: 1, message: "How are you POST", likesCount: 12},
    {id: 2, message: "Ok POST", likesCount: 7},
    {id: 3, message: "Blablablaaa POST", likesCount: 1},
    {id: 4, message: "One more POST", likesCount: 3},
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {id: state.posts.length + 1, message: state.newPostText, likesCount: 0}
        ],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newPostText) =>
  ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText});

export default profileReducer;
