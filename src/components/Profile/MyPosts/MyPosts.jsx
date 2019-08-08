import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  
  let onPostChange = () => {
    let newPostText = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(newPostText));
  };
  
  return (
    <div className='content'>
      <h3>MY POSTS</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ addPost }>Add Post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;