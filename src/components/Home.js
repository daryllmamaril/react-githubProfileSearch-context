import React from "react";

import HeroHeader from "./HeroHeader";
import Alert from "./Alert";
import Search from "./Search";
import Users from "./Users";

function Home() {
  return (
    <div>
      <HeroHeader />
      <Alert />
      <Search />
      <Users />
    </div>
  );
}

export default Home;
