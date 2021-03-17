import styles from "../styles/Home.module.css";
import { FaTelegramPlane, FaMailBulk, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className={styles.main} id="contact">
        <h1 className={styles.title2}>Contact us</h1>
        <h3>
          Bergabunglah dengan komunitas untuk diskusi tentang Nuchain melalui
          beberapa kanal berikut:
        </h3>
        <ul>
          <li>
            <a
              href="https://t.me/nusantarashain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>
                <FaTelegramPlane size={60} />
              </h4>
            </a>
          </li>
          <li>
            <a
              href="mailto:nusantarachain@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>
                <FaMailBulk size={60} />
              </h4>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nusantarachain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>
                <FaGithub size={60} />
              </h4>
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        div {
          background: #ddeadf;
          width: 100%;
        }
        h3 {
          line-height: 1.3;
          font-size: 1.5rem;
          width: 50%;
          text-align: center;
        }
        ul {
          display: inline-block;
        }
        li {
          display: inline;
          float: left;
          margin: 0em 3em;
          color: green;
        }

        li:hover {
          opacity: 0.4;
        }
      `}</style>
    </>
  );
};

export default Contact;
