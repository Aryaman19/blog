import React, { useState } from "react";
import styles from "./styles.module.css";
import HomePageFeatures from "../HomepageFeatures";

const HomePageHeading = ({ setIndex }) => {
  const loadHomePageFeatures = () => {
    // begin transition
    const element_1 = document.getElementById("transition-container-1");
    element_1.classList.add(styles.transition_active);
    element_1.classList.add(styles.transition_hide);

    setTimeout(() => {
      setIndex(1);
    }, 500);
  };

  return (
    <div className={styles.features_container}>
      <div className={styles.features_heading}>EXPLORE</div>
      <div className={styles.features_button} onClick={loadHomePageFeatures}>
        CLICK TO LEARN
      </div>
    </div>
  );
};

export default function Homepage() {
  const [index, setIndex] = useState(0);

  const loadHomePage = () => {
    // begin transition
    const element_1 = document.getElementById("transition-container-1");

    element_1.classList.remove(styles.transition_hide);
    element_1.classList.remove(styles.transition_active);

    setTimeout(() => {
      setIndex(0);
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
        id="transition-container-1"
        className={styles.transition_container_1}
      ></div>
      {index === 0 ? (
        <HomePageHeading setIndex={setIndex} />
      ) : (
        // <HomePageFeatures setIndex={setIndex} />
        <HomePageFeatures loadHomePage={loadHomePage} />
      )}
    </section>
  );
}
