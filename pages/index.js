import Head from "next/head";
import Main from "../components/Main";
import Motivation from "../components/Motivation";
import Roadmap from "../components/Roadmap";
import Installation from "../components/Installation";
import Contribution from "../components/Contribution";
import Contact from "../components/Contact";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <>
      <Head>
        <title>Nuchain</title>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles.container}>
        <Main />
        <Motivation />
        <Roadmap />
        <Installation />
        <Contribution />
        <Contact />
      </div>
    </>
  );
}
