import CallToAction from "../callToAction/CallToAction";
import Hero from "../hero/Hero";
import WhoIsThisFor from "../whoIsThisFor/WhoIsThisFor";
import styles from "./Home.module.css";
import { FaFacebook, FaTwitter, FaGlobe } from "react-icons/fa";

function Home() {
  const scrollLeft = () => {
    document.querySelector(`.${styles["scroll-container"]}`).scrollLeft -= 300;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles["scroll-container"]}`).scrollLeft += 300;
  };

  return (
    <div className={styles["home-outer-container"]}>
      <Hero />
      {/* WHAT WE OFFER */}
      <div className={styles["what-we-offer-container"]}>
        <h1 className={styles["heading"]}>WHAT WE OFFER</h1>
        <div className={styles["container"]}>
          <button className={styles["left-btn"]} onClick="scrollLeft()">
            &#8592;
          </button>

          <div className={styles["scroll-container"]}>
            <div className={styles["card"]}>
              <img src="https://via.placeholder.com/300" alt="Image 1: Product Analysis" />
              <h3>Productive Trend Analysis</h3>
            </div>

            <div className={styles["card"]}>
              <img src="https://via.placeholder.com/300" alt="Image 2: Real Insights" />
              <h3>Real-Driven Insights</h3>
            </div>

            <div className={styles["card"]}>
              <img src="https://via.placeholder.com/300" alt="Image 3: AI Analysis" />
              <h3>AI-Powered Analysis</h3>
            </div>
            <div className={styles["card"]}>
              <img src="https://via.placeholder.com/300" alt="Data Insights" />
              <h3>Data-Driven Insights</h3>
            </div>
          </div>
          <button className={styles["right-btn"]} onClick="scrollRight()">
            &#8594;
          </button>
        </div>
      </div>

      {/* WHO IS THIS FOR*/}
      <WhoIsThisFor />

      {/* MEET OUR TEAM*/}
      <div className={styles["wrapper"]}>
        <h1>MET OUR TEAM</h1>
        <p>Our Team consists of experts in Data Analysis, AI, and Web Development.</p>
        <div className={styles["team-category"]}>
          <h2>Data Analysis Team</h2>
          <div className={styles["teams"]}>
            {[
              { name: "Momen Ghulmi", role: "Data Analyst", desc: "Extracting insights from Data", img: "Momen.jpg" },
              { name: "Anagheem Mansour", role: "Team Leader", desc: "Description of role", img: "Anagheem.jpg" }
            ].map((member, index) => (
              <div className={styles["team-member"]} key={index}>
                <div className={styles["img-member"]}>
                  <img src={member.img} alt={`${member.name}`} />
                </div>
                <h3>{member.name}</h3>
                <p className={styles["role"]}>{member.role}</p>
                <p>{member.desc}</p>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles["team-category"]}>
          <h2>AI Team</h2>
          <div className={styles["teams"]}>
            {[
              { name: "Hussein Awad", role: "AI Programmer", desc: "Optimizing models for better efficiency", img: "Hussein.jpg" },
              { name: "Muna ??", role: "AI Programmer", desc: "Exploring AI-driven solutions", img: "Muna.jpg" }
            ].map((member, index) => (
              <div className={styles["team-member"]} key={index}>
                <div className={styles["img-member"]}>
                  <img src={member.img} alt={`${member.name}`} />
                </div>
                <h3>{member.name}</h3>
                <p className={styles["role"]}>{member.role}</p>
                <p>{member.desc}</p>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles["team-category"]}>
          <h2>Web Development Team</h2>
          <div className={styles["teams"]}>
            {[
              { name: "Majed Alghoul", role: "Front-end Developer", desc: "Building clean and interactive UI", img: "Majed.jpg" },
              { name: "Mariam Alqam", role: "Programmer", desc: "Landing page design and development", img: "Mariam.jpg" },
              { name: "Ameen Dababat", role: "Programmer", desc: "Landing page design and development", img: "Ameen.jpg" }
            ].map((member, index) => (
              <div className={styles["team-member"]} key={index}>
                <div className={styles["img-member"]}>
                  <img src={member.img} alt={`${member.name}`} />
                </div>
                <h3>{member.name}</h3>
                <p className={styles["role"]}>{member.role}</p>
                <p>{member.desc}</p>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ************************* */}
      <div className={styles["container-2"]}>
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
      </div>
      {/* ****************** */}

      <div className={styles["container_3_outer"]}>
        <div className={styles["container_3"]}>
          <div className={styles["feature"]}>
            <i className={styles["fab fa-react"]}></i>
            <h3>Built with Next.js & React</h3>
          </div>
          <div className={styles["feature"]}>
            <i className={styles["fab fa-bootstrap"]}></i>
            <h3>Bootstrap 5 & Sass</h3>
          </div>
          <div className={styles["feature"]}>
            <i className={styles["fab fa-js-square"]}></i>
            <h3>Typescript Clean & Organized</h3>
          </div>
          <div className={styles["feature"]}>
            <i className={styles["fas fa-server"]}></i>
            <h3>Python</h3>
          </div>
          <div className={styles["feature"]}>
            <i className={styles["fas fa-search"]}></i>
            <h3>SEO-friendly Coding</h3>
          </div>
          <div className={styles["feature"]}>
            <i className={styles["fas fa-eye"]}></i>
            <h3>Bower BI </h3>
          </div>
          <div className={styles["feature"]}>
            <i className={styles["fas fa-file-alt"]}></i>
            <h3>one page</h3>
          </div>
          <div className={styles["feature"]}>
            <i className={styles["fas fa-th"]}></i>
            <h3>Isotope Filterable Gallery</h3>
          </div>
          <div className={styles["feature"]}>
            <i className={styles["fas fa-envelope"]}></i>
            <h3>Contact Form w/o Page Refresh</h3>
          </div>
          <div className={styles["feature"]}>
            <i className={styles["fas fa-headset"]}></i>
            <h3>Top-Notch Support & Free Updates</h3>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}

      <CallToAction />
    </div>
  );
}

export default Home;
