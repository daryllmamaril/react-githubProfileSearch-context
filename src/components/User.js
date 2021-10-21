import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Repos from "./Repos";

import GithubContext from "../context/Github/githubContext";

function User({ match }) {
  const githubContextData = useContext(GithubContext);

  const { user, loading, repos, getUser, getUserRepos } = githubContextData;

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div style={{ padding: "100px 160px 10px" }}>
      <Link to="/">
        <button
          className="ui left floated white button"
          style={{ color: "#fff", background: "#2b00d4" }}
        >
          Back to Home Page
        </button>
      </Link>
      <div
        className="ui center aligned container"
        style={{ padding: "50px 0 10px" }}
      >
        <div className="ui violet segment">
          Hireable :{" "}
          {hireable ? (
            <i className="fas fa-check" style={{ color: "green" }} />
          ) : (
            <i className="fas fa-times-circle" style={{ color: "red" }} />
          )}
          <div className="box image" style={{ background: "#fff" }}>
            <img
              className="ui centered medium circular image"
              src={avatar_url}
              alt="profile"
              style={{ width: "150px" }}
            />
          </div>
          <div
            className="ui center aligned list"
            style={{ background: "#fff" }}
          >
            <div className="item" style={{ background: "#fff" }}>
              <p
                className="content"
                style={{
                  background: "#fff",
                  fontSize: "1.8rem",
                  color: "#262A53",
                }}
              >
                {name}
              </p>
            </div>
            <div className="item" style={{ background: "#fff" }}>
              <p
                className="content"
                style={{ background: "#fff", fontSize: "1.3rem" }}
              >
                📍{location}
              </p>
            </div>

            <div className="item" style={{ background: "#fff" }}>
              <div className="content" style={{ background: "#fff" }}>
                <p
                  style={{
                    background: "#fff",
                    color: "#202040",
                    fontSize: "1.1rem",
                  }}
                >
                  <strong
                    style={{
                      background: "#fff",
                      color: "#202040",
                      fontSize: "1.1rem",
                    }}
                  >
                    Bio:{" "}
                  </strong>
                  {bio}
                </p>
              </div>
            </div>

            <div className="item" style={{ background: "#fff" }}>
              <div className="content" style={{ background: "#fff" }}>
                <p style={{ background: "#fff", color: "#202040" }}>
                  👤: {login}
                </p>
              </div>
            </div>

            <div className="item" style={{ background: "#fff" }}>
              <div className="content" style={{ background: "#fff" }}>
                <p style={{ background: "#fff", color: "#202040" }}>
                  🏢: {company}
                </p>
              </div>
            </div>

            <div className="item" style={{ background: "#fff" }}>
              <div className="content" style={{ background: "#fff" }}>
                <p style={{ background: "#fff", color: "#202040" }}>
                  🖥️: {blog}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd div */}
      <div className="ui container">
        <div
          className="ui segment"
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div className="ui labeled button" tabIndex="0">
            <div className="ui purple button">
              <i className="users icon" style={{ background: "#A333C8" }}></i>{" "}
              Followers
            </div>
            <p className="ui basic purple left pointing label">{followers}</p>
          </div>
          <div className="ui labeled button" tabIndex="0">
            <div className="ui basic pink button">
              <i className="heart icon"></i> Following
            </div>
            <button className="ui basic left pointing pink label">
              {following}
            </button>
          </div>
          <div className="ui labeled button" tabIndex="0">
            <div className="ui green button">
              <i
                className="folder open icon"
                style={{ background: "#21BA45" }}
              ></i>{" "}
              Public Repos
            </div>
            <button className="ui basic green left pointing label">
              {public_repos}
            </button>
          </div>
          <div className="ui labeled button" tabIndex="0">
            <div className="ui basic orange button">
              <i className="folder open outline icon"></i> Public Gists
            </div>
            <button className="ui basic left pointing orange label">
              {public_gists}
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <h2 className="ui header" style={{ color: "#262A53" }}>
          <i
            className="folder icon"
            style={{ fontSize: "1.5rem", color: "#161D6F" }}
          ></i>

          <div
            className="content"
            style={{
              fontSize: "1.5rem",
              color: "#161D6F",
              fontWeight: "400",
            }}
          >
            Public Repositories
          </div>
        </h2>
      </div>

      <Repos repos={repos} />
    </div>
  );
}

export default User;
