import CallToAction from "../callToAction/CallToAction";
import Hero from "../hero/Hero";
import WhoIsThisFor from "../whoIsThisFor/WhoIsThisFor";
import styles from "./Home.module.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { useState, useRef } from "react";

// Team Data Array
const teams = [
  {
    name: "Data Analysis Team",
    description:
      "Experts in extracting insights from data for informed decision-making.",
    members: [
      {
        name: "Momen Ghulmi",
        role: "Data Analyst",
        desc: "Extracting insights from Data",
        img: "/Momen.jpeg",
      },
      {
        name: "Anagheem Mansour",
        role: "Team Leader",
        desc: "Leading data initiatives",
        img: "/Anagheem.jpeg",
      },
    ],
  },
  {
    name: "AI Team",
    description: "Optimizing AI models to drive energy transition solutions.",
    members: [
      {
        name: "Hussein Awad",
        role: "AI Programmer",
        desc: "Optimizing models for better efficiency",
        img: "/Hussein.jpeg",
      },
      {
        name: "Muna Hasan",
        role: "AI Programmer",
        desc: "Exploring AI-driven solutions",
        img: "/Muna.jpeg",
      },
    ],
  },
  {
    name: "Web Development Team",
    description: "Designing and developing interactive user interfaces.",
    members: [
      {
        name: "Majed Alghoul",
        role: "Front-end Developer",
        desc: "Building clean and interactive UI",
        img: "/Majed.jpeg",
      },
      {
        name: "Mariam Alqam",
        role: "Programmer",
        desc: "Landing page design and development",
        img: "/Mariam.jpeg",
      },
      {
        name: "Ameen Dababat",
        role: "Programmer",
        desc: "Landing page design and development",
        img: "/Ameen.jpeg",
      },
    ],
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = teams.length;

  // Slide navigation functions
  const slideLeft = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const slideRight = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles["home-outer-container"]}>
      <Hero />

      {/* WHAT WE OFFER */}
      <div className={styles["what-we-offer-container"]}>
        <h1 className={styles["heading"]}>WHAT WE OFFER</h1>
        <div className={styles["offer-text"]}>
          <p>
            <span>Product Trend Analysis:</span> Helping businesses stay ahead
            with data-driven forecasting.
          </p>
          <p>
            <span>Real-Driven Insights:</span> Providing accurate analytics for
            better decision-making.
          </p>
          <p>
            <span>AI-Powered Analysis:</span> Leveraging artificial intelligence
            for automation and optimization.
          </p>
          <p>
            <span>Data-Driven Insights:</span> Ensuring accuracy and efficiency
            in strategic planning.
          </p>
        </div>
      </div>

      {/* WHO IS THIS FOR */}
      <WhoIsThisFor />

      {/* MEET OUR TEAM */}
      <div className={styles["team-wrapper"]}>
        <h2 className={styles["team-title"]}>{teams[currentSlide].name}</h2>
        <p className={styles["team-description"]}>
          {teams[currentSlide].description}
        </p>

        <div className={styles["team-container"]}>
          {/* Left Arrow */}
          <button className={styles["team-left-btn"]} onClick={slideLeft}>
            &#8592;
          </button>

          {/* Team Members */}
          <div className={styles["team-members"]}>
            {teams[currentSlide].members.map((member, index) => (
              <div className={styles["team-member"]} key={index}>
                <div className={styles["img-member"]}>
                  <img src={member.img} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className={styles["role"]}>{member.role}</p>
                <p>{member.desc}</p>
                <div className={styles["social-icons"]}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className={styles["team-right-btn"]} onClick={slideRight}>
            &#8594;
          </button>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <CallToAction />
    </div>
  );
}

export default Home;
