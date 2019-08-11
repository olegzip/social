import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className='content'>
      <ProfileInfo/>
      <MyPosts posts={props.profilePageState.posts}
               dispatch={props.dispatch}/>
    </div>
  )
};

export default Profile;