import styles from "../styles/Home.module.css";
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4,
            duration: 1
          }
        },
      }}>
      <div className={styles.main} id="nuchain">
        <h1 className={styles.title}>Nuchain</h1>
        <p>
          Nuchain (Nusantara Chain) atau Rantara (Rantai Nusantara) adalah sarana
          untuk menuju Indonesia Society 5.0 melalui teknologi blockchain.
        </p>
      </div>
    </motion.div>
    <style jsx>{`
    TODO: Add background image
      div {
        background-color: #015718;
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
    `}</style>
    </>
  );
};

export default Main;
