import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* TODO: Create dropdown button for mobile phone navbar (media query effect) */}
      <nav className={styles.navbar}>
        <div>
          <div className="logo">
            <Link href="/#nuchain">
              <a>
                <Image
                  className={styles.logo}
                  src="/logo.png"
                  width={70}
                  height={65}
                />
              </a>
            </Link>
          </div>
          <ul>
            <li>
              <Link href="/#motivation">
                <a>Motivation</a>
              </Link>
            </li>
            <li>
              <Link href="/#roadmap">
                <a>Roadmap</a>
              </Link>
            </li>
            <li>
              <Link href="/#contribution">
                <a>Contribution</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a>Contact us</a>
              </Link>
            </li>
            <li id="install">
              <Link href="/installation/#installation">
                <a>Installation</a>
              </Link>
            </li>
          </ul>
          <div className="contact">
            <a
              href="https://github.com/nusantarachain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://t.me/nusantarashain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane size={35} />
            </a>
          </div>
        </div>
      </nav>
      <style jsx>{`
        li {
          font-size: 1.1rem;
          font-weight: bold;
          margin: 0 -0.4em;
        }

        a:hover {
          color: #8efab2;
          font-weight: 750;
        }

        .logo {
          display: inline;
          margin: 1.2em;
        }

        .contact {
          display: inline;
          float: right;
          margin-right: 1.5em;
          margin-top: 0.5em;
          color: white;
        }

        .contact a {
          margin: 0 0.6em;
        }

        @media (max-width: 1180px) {
          #install {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
