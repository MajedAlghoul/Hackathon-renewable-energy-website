import CallToAction from "../callToAction/CallToAction";
import Hero from "../hero/Hero";
import WhoIsThisFor from "../whoIsThisFor/WhoIsThisFor";
import styles from "./Home.module.css";
import { FaFacebook, FaTwitter, FaGlobe } from "react-icons/fa";

function Home() {
  return (
    <div className={styles["home-outer-container"]}>
      <Hero />

      <div className={styles["what-we-offer-container"]}>
        <h1 className={styles["heading"]}>what we offer</h1>
        <div className={styles["container"]}>
          <button className={styles["left-btn"]} onClick="scrollLeft()">
            &#8592;
          </button>

          <div className={styles["scroll-container"]}>
            <div className={styles["card"]}>
              <img src="https://via.placeholder.com/300" alt="Image 1" />
              <h3>product hero Analysis</h3>
            </div>

            <div className={styles["card"]}>
              <img src="https://via.placeholder.com/300" alt="Image 2" />
              <h3>real drevin in sign</h3>
            </div>

            <div className={styles["card"]}>
              <img src="https://via.placeholder.com/300" alt="Image 3" />
              <h3>Cras Fermentum Sem</h3>
            </div>
          </div>
          <button className={styles["right-btn"]} onClick="scrollRight()">
            &#8594;
          </button>
        </div>
      </div>

      {/* *********************** */}
      <WhoIsThisFor />
      <div className={styles["wrapper"]}>
        <h1>Meet Our Team</h1>
        <p>
          Our Team includes <br />
          Developer AI &amp; Data Analaysis &amp; Web Develobment
        </p>
        <div className={styles["teams"]}>
          <div className={styles["team-member"]}>
            <div className={styles["img-member"]}>
              <img src="momen.JPG" alt="team_member_image" />
            </div>
            <h3>momen</h3>
            <p className={styles["role"]}>Analysis</p>
            <p>Extracting insiants from Data</p>
            <a href="https://facebook.com" target="_blank">
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
          <div className={styles["team-member"]}>
            <div className={styles["img-member"]}>
              <img src="hassen.jpg" alt="team_member_image" />
            </div>
            <h3>hassen</h3>
            <p className={styles["role"]}>AI</p>
            <p>optimization process through data</p>
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
          <div className={styles["team-member"]}>
            <div className={styles["img-member"]}>
              <img src="majed.jpg" alt="team_member_image" />
            </div>
            <h3>majed</h3>
            <p className={styles["role"]}>Web</p>
            <p>cleaining useing web</p>
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

      <CallToAction />
    </div>
  );
}

export default Home;
