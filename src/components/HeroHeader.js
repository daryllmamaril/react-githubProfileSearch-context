import React from "react";
import banner from "./banner.svg";

const HeroHeader = () => {
  return (
    <div className="banner">
      <div className="content">
        <h2>Find the Best Developers all in one Click.</h2>
        <p>
          <strong
            style={{ color: "#6c63ff", fontSize: "20px", background: "#fff" }}
          >
            Github Search{" "}
          </strong>
          is a Github Profile Search Engine which makes it easy to find
          developers around the world. We make networking for devs easy and fun!
          Find like minded people to collaborate with, showcase your work and
          projects to open up great opportunities for your career and expand
          your network. And for employers we make recruiting a breeze. So what
          are you waiting for,{" "}
          <strong style={{ background: "#fff" }}>
            {" "}
            Start Your Search Now!
          </strong>
        </p>
      </div>
      <img
        src={banner}
        alt="search"
        style={{ width: "40%", background: "#fff" }}
      />
    </div>
  );
};

export default HeroHeader;
