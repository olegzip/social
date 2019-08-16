import React from 'react';
import * as axios from "axios";
import userPhoto from "../../assets/img_avatar.png";

class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {
          this.props.users.map(u =>
            <div key={u.id}>
              <div>
                <div>
                  <img src={(u.photos.small) ? u.photos.small : userPhoto} alt="user avatar"/>
                </div>
                <div>
                  {u.followed
                    ? <button onClick={() => {
                      this.props.unfollow(u.id)
                    }}>UNFOLLOW</button>
                    : <button onClick={() => {
                      this.props.follow(u.id)
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
}

export default Users;
