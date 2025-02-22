import CallToAction from "../callToAction/CallToAction";
import Hero from "../hero/Hero";
import WhoIsThisFor from "../whoIsThisFor/WhoIsThisFor";
import styles from "./Home.module.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { useState, useRef } from "react";

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
        img: "Momen.jpg",
      },
      {
        name: "Anagheem Mansour",
        role: "Team Leader",
        desc: "Leading data initiatives",
        img: "Anagheem.jpg",
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
        img: "Hussein.jpg",
      },
      {
        name: "Muna ??",
        role: "AI Programmer",
        desc: "Exploring AI-driven solutions",
        img: "Muna.jpg",
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
        img: "Majed.jpg",
      },
      {
        name: "Mariam Alqam",
        role: "Programmer",
        desc: "Landing page design and development",
        img: "Mariam.jpg",
      },
      {
        name: "Ameen Dababat",
        role: "Programmer",
        desc: "Landing page design and development",
        img: "Ameen.jpg",
      },
    ],
  },
];

import majed from "/majed Alghoul.jpg";
import Hussein from "/Hussein Awad.jpg";
import momen from "/momen Ghulmi.jpg";

import one from "/1.jpg";
import two from "/2.jpg";
import three from "/3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faBootstrap,
  faJsSquare,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faSearch,
  faEye,
  faFileAlt,
  faTh,
  faEnvelope,
  faHeadset,
  faDatabase,
  faBrain,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const teamRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = teams.length;

  const scrollLeft = () => {
    document.querySelector(`.${styles["scroll-container"]}`).scrollLeft -= 300;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles["scroll-container"]}`).scrollLeft += 300;
  };

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
        <div className={styles["container"]}>
          <button className={styles["left-btn"]} onClick={scrollLeft}>
            &#8592;
          </button>

          <div className={styles["scroll-container"]}>
            <div className={styles["card"]}>
              <img src="1.jpg" alt="Image 1" />
              <h3>product tread Analysis</h3>
            </div>

            <div className={styles["card"]}>
              <img src="2.jpg" alt="Image 2" />
              <h3>real drevin in sign</h3>
            </div>

            <div className={styles["card"]}>
              <img
                src="https://via.placeholder.com/300"
                alt="Image 3: AI Analysis"
              />
              <h3>AI-Powered Analysis</h3>
            </div>
            <div className={styles["card"]}>
              <img src="https://via.placeholder.com/300" alt="Data Insights" />
              <h3>Data-Driven Insights</h3>
            </div>
          </div>
          <button className={styles["right-btn"]} onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      </div>

      {/* WHO IS THIS FOR*/}
      <WhoIsThisFor />

      {/* MEET OUR TEAM*/}
      <div className={styles["team-wrapper"]}>
        <h2 className={styles["team-title"]}>{teams[currentSlide].name}</h2>
        <p className={styles["team-description"]}>
          {teams[currentSlide].description}
        </p>

        <div className={styles["team-container"]}>
          {/* Left Arrow Button */}
          <button className={styles["team-left-btn"]} onClick={slideLeft}>
            &#8592;
          </button>

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

          {/* Right Arrow Button */}
          <button className={styles["team-right-btn"]} onClick={slideRight}>
            &#8594;
          </button>
        </div>
      </div>

      {/* ************************* */}
      {/* <div className={styles["container-2"]}>
        <div className={styles["service-box-1"]}>
          <img src="magnifier-icon.png" alt="User Research" />
          <div className={styles["content_1"]}>
            <h3>identical visualization</h3>
            <p>Duis mollis gravida commodo id luctus erat porttitor ligula.</p>
          </div>
        </div>

        <div className={styles["service-box-2"]}>
          <img src="puzzle-icon.png" alt="Strategy & Planning" />
          <div className={styles["content_2"]}>
            <h3>Ongoing motvaited and tools </h3>
            <p>Duis mollis gravida commodo id luctus erat porttitor ligula.</p>
          </div>
        </div>
      </div> */}
      {/* ****************** */}

      <div className={styles["container_3_outer"]}>
        <div className={styles["container_3"]}>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faReact} className={styles["icon"]} />
            <h3>Built with Next.js & React</h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faBootstrap} className={styles["icon"]} />
            <h3>Bootstrap 5 & Sass</h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faJsSquare} className={styles["icon"]} />
            <h3>Javascript</h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faPython} className={styles["icon"]} />
            <h3>Python</h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faSearch} className={styles["icon"]} />
            <h3>SEO-friendly Coding</h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faEye} className={styles["icon"]} />
            <h3>Bower BI </h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faFileAlt} className={styles["icon"]} />
            <h3>canva</h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faTh} className={styles["icon"]} />
            <h3>Isotope Filterable Gallery</h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faEnvelope} className={styles["icon"]} />
            <h3>Contact Form w/o Page Refresh</h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faDatabase} className={styles["icon"]} />
            <h3>Numpy & Pandas</h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faBrain} className={styles["icon"]} />
            <h3>TensorFlow & LSTM</h3>
          </div>
          <div className={styles["feature"]}>
            <FontAwesomeIcon icon={faChartLine} className={styles["icon"]} />
            <h3>Matplotlib & Linear Regression</h3>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}

      <CallToAction />
    </div>
  );
}

export default Home;
