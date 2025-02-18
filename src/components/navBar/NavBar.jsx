import styles from "./NavBar.module.css";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles["nav-bar-logo-container"]}>
        <div>Website Title</div>
      </div>
      <div className={styles["nav-bar-nav-container"]}>
        <button
          className={`${styles["nav-buttons"]} ${
            isActive("/") ? styles["selected-button"] : ""
          }`}
          onClick={() => navigateTo("/")}
        >
          Home
        </button>
        <button
          className={` ${styles["nav-buttons"]} ${
            isActive("/dashboard") ? styles["selected-button"] : ""
          }`}
          onClick={() => navigateTo("/dashboard")}
        >
          Dashboard
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
