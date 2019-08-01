import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className='content'>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItem + ' ' + styles.active}>Andrey</div>
        <div className={styles.dialogsItem}>Petro</div>
        <div className={styles.dialogsItem}>Semen</div>
        <div className={styles.dialogsItem}>Vasily</div>
        <div className={styles.dialogsItem}>Yasha</div>
        <div className={styles.dialogsItem}>Gosha</div>
      </div>
      <div className={styles.messages}>
        <div className={styles.messagesItem}>Hi</div>
        <div className={styles.messagesItem}>Yo</div>
        <div className={styles.messagesItem}>Boo</div>
      </div>
    </div>
  )
}

export default Dialogs;