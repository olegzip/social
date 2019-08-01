import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img className={styles.ava}
           src="https://www.pngfind.com/pngs/m/381-3819326_default-avatar-svg-png-icon-free-download-avatar.png"
           alt="ava"/>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
};

export default Post;