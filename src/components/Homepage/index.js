import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import HomePageFeatures from "../HomepageFeatures";

const HomePageHeading = ({ loadHomePageFeatures }) => {
  return (
    <div className={styles.features_container}>
      <div className={styles.features_heading}>EXPLORE</div>
      <div className={styles.features_button} onClick={loadHomePageFeatures}>
        CLICK TO LEARN
      </div>
    </div>
  );
};

export default function Homepage({ navbarRef }) {
  const [index, setIndex] = useState(0);
  const ref = useRef();

  const loadHomePage = () => {
    // begin transition
    //const element_1 = document.getElementById("transition-container-1");

    ref.current.classList.remove(styles.transition_hide);
    ref.current.classList.remove(styles.transition_active);

    setTimeout(() => {
      setIndex(0);
    }, 500);
  };

  const loadHomePageFeatures = () => {
    // begin transition
    //const element_1 = document.getElementById("transition-container-1");
    ref.current.classList.add(styles.transition_active);
    ref.current.classList.add(styles.transition_hide);

    setTimeout(() => {
      setIndex(1);
    }, 500);
  };

  return (
    <section className={styles.features}>
      <div className={styles.aurora_container}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        ref={ref}
        id="transition-container-1"
        className={styles.transition_container_1}
      ></div>
      {index === 0 ? (
        <HomePageHeading loadHomePageFeatures={loadHomePageFeatures} />
      ) : (
        // <HomePageFeatures setIndex={setIndex} />
        <HomePageFeatures loadHomePage={loadHomePage} />
      )}
    </section>
  );
}
