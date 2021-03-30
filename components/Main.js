import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import FadeIn from "../animation/fadeIn";

const Main = () => {
  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={FadeIn}>
        <div className={styles.main} id="nuchain">
          <h1 className={styles.title}>Nuchain</h1>
          <p>
            Nuchain (Nusantara Chain) atau Rantara (Rantai Nusantara) adalah
            sarana untuk menuju Indonesia Society 5.0 melalui teknologi
            blockchain.
          </p>
        </div>
      </motion.div>
      <style jsx>{`
        // TODO: Add background image.
        div {
          background: radial-gradient(#013d16, #26ab3e);
          width: 100%;
          // background-image: url('../public/image.jpg');
          // background-repeat: no-repeat;
          // background-attachment: fixed;
          // background-position: center;
        }

        p {
          color: white;
          line-height: 1.2;
          font-size: 1.7rem;
          text-align: center;
          width: 60%;
        }

        @media (max-width: 600px) {
          p {
            width: auto;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Main;
