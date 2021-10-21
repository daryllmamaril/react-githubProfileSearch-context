import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <div className="box">
      <div className="image">
        <img src={user.avatar_url} alt="profile" />
      </div>
      <h1 className="name">{user.login}</h1>
      <h3 className="title">{user.type}</h3>
      <div className="btns">
        <Link to={`/user/${user.login}`}>
          <button>View Profile</button>
        </Link>

        <a href={user.html_url} target="_blank" rel="noreferrer">
          <button>Github Profile</button>
        </a>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
