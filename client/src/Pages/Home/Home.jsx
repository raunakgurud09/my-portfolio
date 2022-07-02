import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { About, Hero, Navigation,Skills } from "../../Components/exports";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Router>
        <Navigation />
        <Hero />
        <About />
        <Skills />
      </Router>
    </div>
  );
}

export default Home;
