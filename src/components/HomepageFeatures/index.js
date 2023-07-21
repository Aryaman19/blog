import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    id: "01",
    title: "RUST",
    img: require("@site/static/img/rust.png").default,
    link: "/docs/rust/intro",
  },
  {
    id: "02",
    title: "ARTIFICIAL INTELLIGENCE",
    img: require("@site/static/img/artificial_intelligence.png").default,
    link: "/docs/artificial-intelligence/intro",
  },
  {
    id: "03",
    title: "SYSTEM DESIGN",
    img: require("@site/static/img/system_design.png").default,
    link: "/docs/system-design/intro",
  },
];

function Feature({ img, title, link }) {
  return (
    <Link to={link} className={styles.link}>
      <div className={styles.feature}>
        {/* <img src={img} className={styles.feature_img} /> */}
        <div className={styles.feature_heading}>{title}</div>
      </div>
    </Link>
  );
}

const HomePageFeatures = ({ loadHomePage }) => {
  return (
    <div className={styles.features_container}>
      <div className={styles.back} onClick={loadHomePage}>
        <span>&lt;</span>
      </div>
      <div className={styles.feature_container}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
};

export default HomePageFeatures;
