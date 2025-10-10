import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/gids">
            Ontdek ZGW - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function ZGWtopnavigatie() {
  const { siteConfig } = useDocusaurusContext();
  return (
      <div>
			<div>
			  <Link className="button button--secondary" to="/">
				ZGW API's
			  </Link>&nbsp;&nbsp;&nbsp;
			  <Link className="button button--secondary" to="/gids/tools">
				Gids
			  </Link>&nbsp;&nbsp;&nbsp;
			  <Link className="button button--secondary" to="/v1/next">
				API Suite
			  </Link>&nbsp;&nbsp;&nbsp;
			  <Link className="button button--secondary" to="/community">
				Community
			  </Link>
			</div>
      </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <ZGWtopnavigatie />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
