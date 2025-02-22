import styles from "./CallToAction.module.css";

function CallToAction() {
  return (
    <div className={styles["container"]}>
      <p className={styles["subheading"]}>CALL TO ACTION</p>
      <h1 className={styles["heading"]}>
        We are trusted by over{" "}
        <span className={styles["highlight"]}>100+</span> clients. <br />
        Join them now and invest in Renewable Energies.
      </h1>
      <button className={styles["cta-button"]}>Explore the Dashboard</button>
    </div>
  );
}

export default CallToAction;
