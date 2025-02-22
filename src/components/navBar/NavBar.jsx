import styles from "./NavBar.module.css";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFloatingMenuOpen } from "../../hooks/useFloatingMenuOpen";

function NavBar() {
  const { isFloatingMenuOpen, setIsFloatingMenuOpen, widthh } =
    useFloatingMenuOpen();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles["nav-bar-logo-container"]}>
        {widthh <= 1000 && isActive("/dashboard") && (
          <button
            onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
            style={{
              width: "32px",
              height: "32px",
              padding: "0px",
              border: "none",
              marginRight: "20px",
              cursor: "pointer",
              background: "none",
            }}
          >
            <img src="/hmenu.svg" alt="Logo" width={"100%"} height={"100%"} />
          </button>
        )}

        <div>GreenWatt</div>
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
