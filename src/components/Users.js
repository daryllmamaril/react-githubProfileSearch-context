import React, { useEffect, useContext } from "react";

import UserItem from "./UserItem";
import Loading from "./Loading";

import GithubContext from "../context/Github/githubContext";

function Users() {
  const githubContextData = useContext(GithubContext);

  const { users, loading, defaultUsers } = githubContextData;

  useEffect(() => {
    defaultUsers();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="userContainer">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
