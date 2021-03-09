import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";

const Hamburger = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={toggle ? "Hamburger ham" : "Hamburger no-ham"}
      onClick={(e) => {
        e.stopPropagation();
        setToggle(!toggle);
      }}
    >
      <div className="ham-icon">
        {toggle && <div className="close">X</div>}
        {!toggle && (
          <div className="bars">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        )}
      </div>
      <div className="nav-links">
        <Navigation to="/" label="Home" />
        <Navigation to="/self-projects" label="Self-projects" />
        <Navigation to="/courses&trainings" label="Courses & Trainings" />
        {/* <Navigation to="/resume" label="Resume" /> */}
        <Navigation to="/contact" label="Contact" />
      </div>
    </div>
  );
};

export default Hamburger;
