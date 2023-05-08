import React, { useEffect } from "react";
import Paris from "../../assets/paris1.jpg";
import NewYork from "../../assets/new-york.jpg";
import London from "../../assets/london.jpg";
import Dubai from "../../assets/dubai.jpg";
import traveler1 from "../../assets/person1.jpg";
import traveler2 from "../../assets/person2.jpg";
import traveler3 from "../../assets/person3.jpg";
import traveler4 from "../../assets/person4.jpg";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage: Paris,
    travelerImage: traveler1,
    travelerName: "FrankEmmy",
    socialLink: "@frankemmy98",
  },
  {
    id: 2,
    destinationImage: NewYork,
    travelerImage: traveler2,
    travelerName: "Bobby",
    socialLink: "@bobby",
  },
  {
    id: 3,
    destinationImage: London,
    travelerImage: traveler3,
    travelerName: "MoiseKean",
    socialLink: "@MoiseKean",
  },
  {
    id: 4,
    destinationImage: Dubai,
    travelerImage: traveler4,
    travelerName: "CJ",
    socialLink: "@CJ",
  },
];

const Travelers = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => (
              // Single Traveler card
              <div
                key={id}
                data-aos="fade-up"
                data-aos-duration="2500"
                className="singleTraveler"
              >
                <img src={destinationImage} className="destinationImage" />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} className="travelerImage" />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
