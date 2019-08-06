import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

function App(props) {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div>
        <Route path='/dialogs'
               render={() => <Dialogs
                 state={props.state.dialogsPage}/>}/>
        <Route path='/profile'
               render={() => <Profile
                 profilePageState={props.state.profilePage}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}/>} />
      </div>
      <div className="ads"> ads</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
