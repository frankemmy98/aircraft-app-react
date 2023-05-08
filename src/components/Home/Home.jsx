import React, { useEffect } from "react";
import planeVideo from "../../assets/takeoff.mp4";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          A Journey to always remember
        </h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={planeVideo} autoPlay muted loop className="video"></video>
        </div>
      </div>
    </div>
  );
};

export default Home;
