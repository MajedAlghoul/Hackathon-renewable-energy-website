import styles from "./CallToAction.module.css";

function CallToAction() {
  return (
    <div className={styles["container"]}>
      <p className={styles["subheading"]}>CALL TO ACTION</p>
      <h1 className={styles["heading"]}>
        We are trusted by over{" "}
        <span className={styles["highlight"]}>5000+</span> clients. <br />
        Join them now and grow your business.
      </h1>
      <button className={styles["cta-button"]}>Get Started Now</button>
    </div>
  );
}

export default CallToAction;
