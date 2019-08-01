import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img className={styles.headerImg}
          src="https://images.unsplash.com/photo-1517219039361-66f283bce5db?ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
          alt="img"/>
      </div>
      <div>
        Ava and Description
      </div>
      <MyPosts/>
    </div>
  )
};

export default Profile;