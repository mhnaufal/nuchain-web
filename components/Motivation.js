import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import FadeIn from "../animation/fadeIn";
import styles from "../styles/Home.module.css";

const Motivation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeIn}
      >
        <div className={styles.main} id="motivation">
          <h1 className={styles.title2}>Motivation</h1>
          <p className={styles.description}>
            Nuchain diciptakan dengan tujuan untuk menyongsong Indonesia Society
            5.0 dan Web 3.0 melalui sistem terdistribusi dan aman yang disebut
            dengan rantai blok (blockchain).
          </p>
          <hr></hr>
          <p className={styles.description}>
            Mengapa <strong>blockchain?</strong>
          </p>
          <ul>
            <li>
              Hampir semua aplikasi internet yang ada saat ini berjalan secara
              terpusat (centralized), salah satu semangat Web 3.0 adalah
              aplikasi terdistribusi. Blockchain yang secara alamiahnya adalah
              sistem terdistribusi bisa dijadikan fondasi untuk menuju era
              aplikasi internet terdistribusi.
            </li>
            <li>
              Keamanan, sistem blockchain diamankan menggunakan kriptografi di
              lapisan paling dasarnya, memberikan jaminan keamanan tinggi.
            </li>
            <li>
              Blockchain merupakan trustless system sangat bisa diandalkan untuk
              membangun aplikasi yang membutuhkan jaminan legitimasi tanpa perlu
              mempercayai satu sama lain.
            </li>
            <li>
              Nuchain bukan didesain untuk menjadi crypto currency, tetapi
              sebagai platform aplikasi terdistibusi (DApps) yang nantinya akan
              menjadi ekosistem baru di era teknologi digital yang membutuhkan
              keterbukaan, kejelasan, legitimasi, dan good governance.
            </li>
          </ul>
        </div>
      </motion.div>
      <style jsx>{`
        ul {
          display: flex;
          align-items: center;
          text-align: justify;
          justify-content: center;
          flex-wrap: wrap;
          width: 60%;
          list-style-type: none;
        }

        li {
          margin: 1em 0;
          font-size: 1.2rem;
          line-height: 1.5;
        }

        hr {
          width: 70%;
          margin-top: 5%;
          border: 0;
          height: 2px;
          background: linear-gradient(to right, #ebfff6, #02a808, #ebfff6);
        }

        @media (max-width: 600px) {
          li {
            width: auto;
          }

          ul {
            width: auto;
            max-width: 95%;
          }
        }
      `}</style>
    </>
  );
};

export default Motivation;
