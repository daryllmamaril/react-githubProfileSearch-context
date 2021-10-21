import React, { useReducer } from "react";
import axios from "axios";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  DEFAULT_USERS,
} from "../types";

function GithubState(props) {
  const initialState = {
    users: [],
    loading: false,
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // FROM SEARCH COMPONENT
  const searchUsers = async (username) => {
    dispatch({
      type: SET_LOADING,
    });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  // FROM SEARCH COMPONENT
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  // FROM USER COMPONENT
  const getUser = async (username) => {
    dispatch({
      type: SET_LOADING,
    });
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // FROM USER COMPONENT
  const getUserRepos = async (username) => {
    dispatch({
      type: SET_LOADING,
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // DEFAULT USERS METHOD(WAS USE EFFECT IN APP.JS) USERS COMPONENT NOW
  const defaultUsers = async () => {
    dispatch({
      type: SET_LOADING,
    });
    const res = await axios.get("https://api.github.com/users");
    dispatch({
      type: DEFAULT_USERS,
      payload: res.data,
    });
  };

  return (
    <>
      <GithubContext.Provider
        value={{
          users: state.users,
          loading: state.loading,
          user: state.user,
          repos: state.repos,
          searchUsers,
          clearUsers,
          getUser,
          getUserRepos,
          defaultUsers,
        }}
      >
        {props.children}
      </GithubContext.Provider>
    </>
  );
}

export default GithubState;
