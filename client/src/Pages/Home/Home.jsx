
import { BrowserRouter as Router } from "react-router-dom";
import { About, Hero, Navigation,Skills,Footer ,Contact} from "../../Components/exports";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Router>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default Home;
