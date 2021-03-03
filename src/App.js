import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Footer1 from "./components/Footer1/Footer1";
import Footer2 from "./components/Footer2/Footer2";
import Navigation from "./components/Navigation/Navigation";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";

const App = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="App">
      <div
        className={
          path == "/" ? "Navigation nav-home" : "Navigation nav-not-home"
        }
      >
        <div className="nav-head">ARVIND CHAUHAN</div>
        <div className="nav-links">
          <Navigation to="/" label="Home" />
          <Navigation to="/self-projects" label="Self-projects" />
          <Navigation to="/contact" label="Contact" />
          <Navigation to="/resume" label="Resume" />
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/self-projects">
          <Projects />
        </Route>
      </Switch>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default App;
