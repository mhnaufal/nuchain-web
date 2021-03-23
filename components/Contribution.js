import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import FadeIn from "../animation/fadeIn";
import styles from "../styles/Home.module.css";

const Contribution = () => {
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
        <div className={styles.main} id="contribution">
          <h1 className={styles.title2}>Contribution</h1>
          <h3>
            Tertarik dengan proyek ini? Anda bisa ikut kontribusi dengan
            beberapa cara:
          </h3>
          <ul>
            <li>
              <a
                href="https://github.com/nusantarachain/nuchain/wiki/Menjadi-Validator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Menjadi validator
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nusantarachain/nuchain/wiki/Menjadi-Nominator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Menjadi nominator
              </a>
            </li>
            <li>
              <a
                href="https://t.me/nusantarashain"
                target="_blank"
                rel="noopener noreferrer"
              >
                Menjadi pengembang untuk peralatan pendukung Nuchain seperti
                Mobile App, Block Scanner, atau lainnya
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nusantarachain/onchain-apps"
                target="_blank"
                rel="noopener noreferrer"
              >
                Menjadi pengembang kontrak pintar (Smart Contract) atau dApps
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
      <style jsx>{`
        h3 {
          line-height: 1.3;
          font-size: 1.5rem;
          width: 50%;
          text-align: justify;
        }

        ul {
          width: 60%;
          margin: auto;
          list-style-type: none;
        }

        li {
          line-height: 1.8;
          text-align: center;
          margin: 1em 1.5em;
          padding: 0.5em 0.5em;
          border: 2px solid #1f211e;
          border-radius: 15px;
          color: black;
          font-weight: 650;
          opacity: 0.8;
          background: white;
        }

        li:hover {
          opacity: 1;
          color: #ffff;
          border: 2.5px solid #096115;
          background: #028c47;
          font-weight: 650;
          box-shadow: 0 8px 2px black;
        }

        @media (max-width: 600px) {
          ul {
            width: 100%;
          }

          h3 {
            font-size: 1em;
          }
        }
      `}</style>
    </>
  );
};

export default Contribution;
