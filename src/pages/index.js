import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Homepage from "@site/src/components/Homepage";

import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const navbar = document.getElementsByClassName("navbar");

  useEffect(() => {
    if (navbar[0]) {
      window.location.pathname === "/"
        ? navbar[0].classList.add("hide-navbar")
        : navbar[0].classList.remove("hide-navbar");
    }
  }, [navbar]);

  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="This is personal blog of Aryaman."
    >
      <Homepage />
    </Layout>
  );
}
