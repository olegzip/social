import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  form: formReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//TODO
window.store = store;

export default store;