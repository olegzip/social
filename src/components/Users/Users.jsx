import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/img_avatar.png";
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

const Users = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  return (
    <div>
      <div className={styles.paginatorWrapper}>
        {pages.map(p => {
          return <span
            key={p}
            className={(props.currentPage === p) ? styles.selectedPage : null}
            onClick={() => {
              props.onPageChanged(p)
            }}>
          {p}
          </span>
        })}
      </div>
      {
        props.users.map(u =>
          <div key={u.id}>
            <div>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img src={(u.photos.small) ? u.photos.small : userPhoto} alt="user avatar"/>
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                      withCredentials: true,
                      headers: {"API-KEY": "7a70bd6f-2b18-4692-8d79-b1be013b9efa"}
                    })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id)
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}>UNFOLLOW</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios.post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                        withCredentials: true,
                        headers: {"API-KEY": "7a70bd6f-2b18-4692-8d79-b1be013b9efa"}
                      })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id)
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}>FOLLOW</button>}
              </div>
            </div>
            <div>
              <div>
                <div>
                  {u.name}
                </div>
                <div>
                  {u.status}
                </div>
              </div>
              <div>
                <div>
                  {"u.location.country"}
                </div>
                <div>
                  {"u.location.city"}
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Users;