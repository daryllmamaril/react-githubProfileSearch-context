import React, { useState, useContext } from "react";

import GithubContext from "../context/Github/githubContext";
import AlertContext from "../context/Alert/alertContext";

function Search() {
  const githubContextData = useContext(GithubContext);
  const { searchUsers, clearUsers, users } = githubContextData;

  const alertContextData = useContext(AlertContext);
  const { showAlert } = alertContextData;

  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      showAlert("⚠︎ UserName is Required !", "negative");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <>
      <div className="search-box-container">
        <div className="search-box">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Hello, is it me you're looking for?..."
              value={text}
              onChange={onChange}
            />
            <label htmlFor="fa-search" className="icon">
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </label>
          </form>
        </div>
      </div>

      <div className="searh-box-container">
        {users.length > 0 && (
          <button
            onClick={clearUsers}
            className="fluid ui violet button"
            style={{ width: "20%", margin: "0 auto 0", borderRadius: "30px" }}
          >
            Clear
          </button>
        )}
      </div>
    </>
  );
}

export default Search;
