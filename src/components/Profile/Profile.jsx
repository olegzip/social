import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
  return (
    <div className='content'>
      <ProfileInfo />
      <MyPosts posts={props.profilePageState.posts}
               dispatch={props.dispatch} />
    </div>
  )
};

export default Profile;