import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/formsControls/FormsControl";

let maxLength10 = maxLength(10);

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className='content'>
      <h3>MY POSTS</h3>
      <AddNewPostForm onSubmit={onAddPost}/>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
};

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;