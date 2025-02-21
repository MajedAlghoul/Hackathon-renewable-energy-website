import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram, FaYoutube } from "react-icons/fa";

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
              
        {/* The Social Media Icons*/}
        <div className={styles["social-icons"]}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaDribbble />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
  
    </footer>
  );
}

export default Footer;
