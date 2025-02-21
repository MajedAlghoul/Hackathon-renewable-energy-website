import CallToAction from "../callToAction/CallToAction";
import Hero from "../hero/Hero";
import WhoIsThisFor from "../whoIsThisFor/WhoIsThisFor";
import styles from "./Home.module.css";
import { FaFacebook, FaTwitter, FaGlobe } from "react-icons/fa";
import majed from "/majed Alghoul.jpg";
import Hussein from "/Hussein Awad.jpg";
import momen from "/momen Ghulmi.jpg";

import one from "/1.jpg";
import two from "/2.jpg";
import three from "/3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faBootstrap, faJsSquare ,faPython} from "@fortawesome/free-brands-svg-icons";
import { faServer, faSearch, faEye, faFileAlt, faTh, faEnvelope, faHeadset,faDatabase,faBrain,faChartLine} from "@fortawesome/free-solid-svg-icons";

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
              <img src="1.jpg" alt="Image 1" />
              <h3>product tread  Analysis</h3>
            </div>

            <div className={styles["card"]}>
              <img src="2.jpg" alt="Image 2" />
              <h3>real drevin in sign</h3>
            </div>

            <div className={styles["card"]}>
              <img src="3.jpg" alt="Image 3" />
              <h3>AI power analysis</h3>
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
              <img src="momen Ghulmi.jpg" alt="team_member_image" />
            </div>
            <h3>momen Ghulmi</h3>
            <p className={styles["role"]}>Analysis</p>
            <p className={styles["short"]}>Extracting insiants from Data</p>
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
              <img src="Hussein Awad.jpg" alt="team_member_image" />
            </div>
            <h3>Hussein Awad</h3>
            <p className={styles["role"]}>AI</p>
            <p className={styles["short"]}>optimization process through data</p>
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
              <img src="majed Alghoul.jpg" alt="team_member_image" />
            </div>
            <h3>majed Alghoul</h3>
            <p className={styles["role"]}>Web</p>
            <p className={styles["short"]}>cleaining useing web</p>
            <a
              href="https://facebook.com"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </div>
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
          <FontAwesomeIcon icon={faBootstrap} className={styles["icon"]}/>
            <h3>Bootstrap 5 & Sass</h3>
          </div>
          <div className={styles["feature"]}>
          <FontAwesomeIcon icon={faJsSquare} className={styles["icon"]}/>
            <h3>Javascript</h3>
          </div>
          <div className={styles["feature"]}>
          <FontAwesomeIcon icon={faPython} className={styles["icon"]}/>
            <h3>Python</h3>
          </div>
          <div className={styles["feature"]}>
          <FontAwesomeIcon icon={faSearch} className={styles["icon"]}/>
            <h3>SEO-friendly Coding</h3>
          </div>
          <div className={styles["feature"]}>
          <FontAwesomeIcon icon={faEye} className={styles["icon"]}/>
            <h3>Bower BI </h3>
          </div>
          <div className={styles["feature"]}>
          <FontAwesomeIcon icon={faFileAlt} className={styles["icon"]}/>
            <h3>canva</h3>
          </div>
          <div className={styles["feature"]}>
          <FontAwesomeIcon icon={faTh} className={styles["icon"]}/>
            <h3>Isotope Filterable Gallery</h3>
          </div>
          <div className={styles["feature"]}>
          <FontAwesomeIcon icon={faEnvelope} className={styles["icon"]}/>
            <h3>Contact Form w/o Page Refresh</h3>
          </div>
          <div className={styles["feature"]}>
          <FontAwesomeIcon icon={faDatabase} className={styles["icon"]}/>
            <h3>Numpy & Pandas</h3>
          </div>
          <div className={styles["feature"]}>
          <FontAwesomeIcon icon={faBrain} className={styles["icon"]}/>
            <h3>TensorFlow & LSTM</h3>
          </div>
          <div className={styles["feature"]}>
          <FontAwesomeIcon icon={faChartLine} className={styles["icon"]}/>
            <h3>Matplotlib & Linear Regression</h3>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
}

export default Home;
