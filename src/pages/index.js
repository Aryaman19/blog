import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Homepage from "@site/src/components/Homepage";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const navbar = document.getElementsByClassName("navbar");
    if (navbar) {
      window.location.pathname === "/"
        ? navbar[0].classList.add("hide-navbar")
        : navbar[0].classList.remove("hide-navbar");
    }
  }, []);

  return (
    <Layout description="This is personal blog of Aryaman.">
      <Homepage />
    </Layout>
  );
}
