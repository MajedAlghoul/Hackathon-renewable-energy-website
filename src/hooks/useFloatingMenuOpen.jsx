import React, { useState, useEffect } from "react";

const FloatingMenuOpenContext = React.createContext();

export function FloatingMenuOpen({ children }) {
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  const [widthh, setWidthh] = useState(window.innerWidth);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsFloatingMenuOpen(false);
      }
    };
    const handleResize = () => {
      const width = window.innerWidth;
      setWidthh(width);
      if (width > 1000) {
        setIsFloatingMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FloatingMenuOpenContext.Provider
      value={{ isFloatingMenuOpen, setIsFloatingMenuOpen, widthh }}
    >
      {children}
    </FloatingMenuOpenContext.Provider>
  );
}

export function useFloatingMenuOpen() {
  return React.useContext(FloatingMenuOpenContext);
}
