import imghero from "../assets/images/img-hero.jpg";
import torn from "../assets/images/paper.png";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <img src={imghero} />
        <img src={torn} />
        <div className="wrapper"></div>
      </div>
    </div>
  );
};

export default Hero;
