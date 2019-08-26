import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: "How are you POST", likesCount: 12},
    {id: 2, message: "Ok POST", likesCount: 7},
    {id: 3, message: "Blablablaaa POST", likesCount: 1},
    {id: 4, message: "One more POST", likesCount: 3},
  ],
  newPostText: '',
  profile: null,
  status: '',
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    })
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data))
    })
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
};


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newPostText) =>
  ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText});

export default profileReducer;
