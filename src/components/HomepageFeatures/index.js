import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Rust",
    img: require("@site/static/img/rust.png").default,
    link: "/docs/rust/intro",
  },
  {
    title: "Artificial Intelligence",
    img: require("@site/static/img/artificial_intelligence.png").default,
    link: "/docs/artificial-intelligence/intro",
  },
  {
    title: "System Design",
    img: require("@site/static/img/system_design.png").default,
    link: "/docs/system-design/intro",
  },
];

function Feature({ img, title, link }) {
  return (
    <Link to={link} className={styles.link}>
      <div className={styles.feature}>
        <img src={img} className={styles.feature_img} />
        <h2 className={styles.feature_heading}>{title}</h2>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.aurora_container}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.features_container}>
        <h1 className={styles.heading}>Choose Your Realm !</h1>
        <div className={styles.feature_container}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
