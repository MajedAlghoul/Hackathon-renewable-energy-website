import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-section"]}>
          <h3>Subscribe</h3>
          <p>Join us</p>
          <p>to stay updated</p>
        </div>
        <div className={styles["footer-section"]}>
          <h3>Phone</h3>
          <p>+970 591 234 5678</p>
          <p>+970 561 234 5678</p>
        </div>
        <div className={styles["footer-section"]}>
          <h3>E-mail</h3>
          <p>TeamP1-5@email.com</p>
          <p>support@energytransition.com</p>
        </div>
      </div>

      <div className={styles["social-icons"]}>
        <a href="#">
          <i className={styles["fa-brands fa-twitter"]}></i>
        </a>
        <a href="#">
          <i className={styles["fa-brands fa-facebook-f"]}></i>
        </a>
        <a href="#">
          <i className={styles["fa-brands fa-dribbble"]}></i>
        </a>
        <a href="#">
          <i className={styles["fa-brands fa-instagram"]}></i>
        </a>
        <a href="#">
          <i className={styles["fa-brands fa-youtube"]}></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
