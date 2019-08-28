import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from "../common/formsControls/FormsControl";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import styles from "../common/formsControls/FormsControl.module.css"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter email"
          validate={[required]}
          name='email'
          component={Input}/>
      </div>
      <div>
        <Field
          placeholder="Enter Password"
          validate={[required]}
          name='password'
          type='password'
          component={Input}/>
      </div>
      <div>
        <Field
          name='rememberMe'
          component={Input}
          type={"checkbox"}/> remember me
      </div>
      {props.error && <div className={styles.formError}>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);