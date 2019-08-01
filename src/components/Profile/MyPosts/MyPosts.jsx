import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className='content'>
      My posts
      <div>
        <textarea/>
        <button>Add Post</button>
      </div>
      <div>
        <Post message='Hi, how are you?'/>
        <Post message="It's my first post"/>
      </div>
    </div>
  )
};

export default MyPosts;