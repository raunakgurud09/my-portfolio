import React from "react";
import { Button } from "@mui/material";
import image from "../../Assets/Image/2842680.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="container-left">
        <div className="hero_text-wrap">
          <h3>Hello world</h3>
          <h1>WEB DEVELOPER AND FREENACER</h1>
          <p>Looking for collaboration and working on your dream project.</p>
        </div>
        <Button />
      </div>
      <div className="container-right">
        <div className="hero-image-container">
          <img className="hero-image" src={image} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
