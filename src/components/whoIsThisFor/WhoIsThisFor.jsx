import styles from "./WhoIsThisFor.module.css";
import { FaLandmark, FaBuilding, FaGraduationCap, FaBolt } from "react-icons/fa";

function WhoIsThisFor() {
  return (
    <section className={styles["services"]}>
      <p className={styles["subheading"]}>WHO IS THIS FOR?</p>
      <h1 className={styles["heading"]}>
        Empowering key players in the energy transition.
      </h1>

      <div className={styles["services-container"]}>
        <div className={styles["service-box"]}>
          <div className={`${styles.icon} ${styles.icon1}`}>
          <FaLandmark />
          </div>
          <h3>Policy Makers</h3>
          <p>Support clean energy policies.</p>
        </div>

        <div className={styles["service-box"]}>
          <div className={`${styles.icon} ${styles.icon2}`}>
          <FaBuilding/>
          </div>
          <h3>Businesses & Investors</h3>
          <p>Identify energy opportunities.</p>
        </div>

        <div className={styles["service-box"]}>
          <div className={`${styles.icon} ${styles.icon3}`}>
          <FaGraduationCap />
          </div>
          <h3>Researchers & Students</h3>
          <p>Access real-world energy data.</p>
        </div>

        <div className={styles["service-box"]}>
          <div className={`${styles.icon} ${styles.icon4}`}>
          <FaBolt />
          </div>
          <h3>Energy Providers</h3>
          <p>Plan future energy supply.</p>
        </div>
      </div>
    </section>
  );
}

export default WhoIsThisFor;
