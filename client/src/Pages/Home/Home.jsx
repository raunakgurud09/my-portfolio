import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { About, Hero, Navigation,Skills ,Contact} from "../../Components/exports";
import {Footer} from '../../Components/exports'
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Router>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default Home;
