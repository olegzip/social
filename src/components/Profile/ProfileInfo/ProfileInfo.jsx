import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader/>
  }
  
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          className={styles.avatarBig}
          src={props.profile.photos.large}
          alt="img"/>
      </div>
      <h2>{props.profile.fullName}</h2>
      <h4>{props.profile.aboutMe}</h4>
      <ProfileStatus status={props.status}
                     updateStatus={props.updateStatus}
      />
    </div>
  )
};

export default ProfileInfo;