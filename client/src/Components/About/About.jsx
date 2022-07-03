import "./about.css";
import image from '../../Assets/Image/mypic1.png'

function About() {
  return (
    <div className="container" id="about">
      <div className="about__container-left">
        <div className="about__text-wrap">
          <h3>About ME</h3>
          <p>
            I am currently completing my computer science engineering from
            Mumbai university, also looking for freelance work and
            Looking for internship opportunities in Web Development to grow and
            benefit the itten in 45 BC. <br/><br/> This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
      <div className="about__container-right">
        <div className="about__image-container">
          <img className="about-image" src={image} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default About;
