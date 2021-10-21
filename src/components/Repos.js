import React from "react";

const Repos = ({ repos }) => {
  return repos.map((repo) => (
    <div key={repo.id} className="ui container" style={{ marginTop: "10px" }}>
      <div className="ui violet segment">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          <h3 style={{ color: "#262A53", background: "#fff" }}>
            <i
              className="folder open outline icon"
              style={{ color: "#161D6F", background: "#fff" }}
            ></i>
            {repo.name}
          </h3>
        </a>
        <p style={{ background: "#fff" }}>{repo.description}</p>
        <span
          style={{
            background: "#fff",
            fontSize: "0.9rem",
            color: "#BC6FF1",
            marginRight: "10px",
          }}
        >
          •{repo.language}
        </span>
        <i
          className="eye icon"
          style={{ background: "#fff", fontSize: "0.9rem", color: "#7868E6" }}
        ></i>
        <span
          style={{ background: "#fff", fontSize: "0.9rem", color: "#7868E6" }}
        >
          {repo.watchers} watchers
        </span>
      </div>
    </div>
  ));
};

export default Repos;
