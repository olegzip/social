import React from 'react';

const Users = (props) => {
  
  if (props.users.length === 0) {
    props.setUsers(
      [
        {
          id: 1,
          photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
          followed: false,
          fullName: "Dima",
          status: "i`m user 1",
          location: {city: "Minsk", country: "Belarus"}
        },
        {
          id: 2,
          photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
          followed: true,
          fullName: "Oleg",
          status: "i`m user 2",
          location: {city: "Kyiv", country: "Ukraine"}
        },
        {
          id: 3,
          photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
          followed: false,
          fullName: "Petro",
          status: "i`m user 3",
          location: {city: "Kisheneu", country: "Moldova"}
        },
        {
          id: 4,
          photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
          followed: true,
          fullName: "John",
          status: "i`m user 4",
          location: {city: "New-York", country: "USA"}
        },
      ]
    );
  }
  
  return <div>
    {
      props.users.map(u =>
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="user avatar"/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {
                  props.unfollow(u.id)
                }}>UNFOLLOW</button>
                : <button onClick={() => {
                  props.follow(u.id)
                }}>FOLLOW</button>}
            </div>
          </span>
          <span>
            <span>
              <div>
                {u.fullName}
              </div>
              <div>
                {u.status}
              </div>
            </span>
            <span>
              <div>
                {u.location.country}
              </div>
              <div>
                {u.location.city}
              </div>
            </span>
          </span>
        </div>
      )
    }
  </div>
};

export default Users;