import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import Home from "./components/Home";

import GithubState from "./context/Github/GithubState";
import AlertState from "./context/Alert/AlertState";

function App() {
  return (
    <GithubState>
      <AlertState>
        {/* All components need to be wrapped inside Router so it has access to all */}
        <Router basename="/githubcontext">
          <>
            <NavBar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user/:login" component={User} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>

            <Footer />
          </>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
