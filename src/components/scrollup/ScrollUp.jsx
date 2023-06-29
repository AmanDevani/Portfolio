import React, { useEffect, useState } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 560;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <div onClick={goToBtn}>
          <div className="scrollup">
            <i className="uil uil-arrow-up scroll__icon"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollUp;
