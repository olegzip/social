import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className='header'>
      <h1 className={styles.header}>THIS IS HEADER</h1>
      <div className={styles.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>LOGOUT</button></div>
          : <NavLink  to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
};

export default Header;