import React, { useState } from "react";
import moon from "../../moon.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="image-container">
        <img src={moon} alt="moon" />
        <div className="over-img">
          <p>I AM A FULL STACK WEB DEVELOPER</p>
          <p>BASED IN MUMBAI</p>
        </div>
      </div>
      <div className="about">
        <div className="head">
          <h1>About Me</h1>
        </div>
        <div className="content">
          <p>
            I am a full-stack web developer based in Mumbai, India. I have
            completed my engineering in Electronics And Telecommuncations from
            Atharva Colllege of Engineering, Mumbai. I like to design and create
            websites, I have made some cool apps for my self-projects like
            facebook clone, blog site, inventory-app, shopping app (front-end
            only). For now the skills I have are HTML, CSS, Javascript, Nodejs,
            Express, React, MongoDB, Python and Machine Learning. And I hope to
            add more skills in my kit as I progress with time :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
