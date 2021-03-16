import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
        <nav className={styles.navbar}>
            <div>
                <div className="logo">
                    <a href="#nuchain">
                        <Image className={styles.logo} src="/logo.png" width={70} height={65} />
                    </a>
                </div>
            <ul>
                <li><a href="#motivation">Motivation</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#installation">Installation</a></li>
                <li><a href="#contribution">Contribution</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ul>
                <div className="contact">
                    <a href="https://github.com/nusantarachain" target="_blank" rel="noopener noreferrer"><FaGithub size={40} /></a>
                    <a href="https://t.me/nusantarashain" target="_blank" rel="noopener noreferrer"><FaTelegramPlane size={40}/></a>
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
        `}</style>
        </>
    );
}

export default Navbar;