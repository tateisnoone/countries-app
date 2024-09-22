import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="aboutUs">
        <h1>Today's Heroes Tomorrow's Future</h1>
        <p>
          Vought International leads the way in hero management and innovation,
          ensuring safety and justice for all. Together, we create a brighter,
          safer future.
        </p>
        <button className="heroButton">Meet our Heroes</button>
      </div>
    </div>
  );
};

export default Hero;
