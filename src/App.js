import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div>
        <Route path='/dialogs'
               render={() => <DialogsContainer/>}/>

        <Route path='/profile'
               render={() => <Profile/>}/>
      </div>
      <div className="ads"> ads</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
