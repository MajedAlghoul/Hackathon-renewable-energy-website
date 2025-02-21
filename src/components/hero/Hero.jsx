import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-left"]}>
        <h1>Empowering Renewable Energy Decisions in the Middle East</h1>
        <p>AI Powered Analytics for Smarter Energy Transitions</p>
        <a
          onClick={() => navigateTo("/dashboard")}
          className={styles["cta-button"]}
        >
          Explore the Dashboard
        </a>
      </div>

      <div className={styles["hero-right"]}></div>

      <div className={styles["hero-image"]}>
        <img src="/energy.jpg" alt="Solar Panels and Wind Turbines" />
      </div>
    </section>
  );
}

export default Hero;
