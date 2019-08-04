import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1517219039361-66f283bce5db?ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
          alt="img"/>
      </div>
      <div>
        Ava and Description
      </div>
    </div>
  )
};

export default ProfileInfo;