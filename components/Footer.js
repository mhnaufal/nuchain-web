import styles from '../styles/Home.module.css'

const Footer = () => {
    const backToTop = () => {
        window.scrollTo(0,0);
    }
    return (
        <>
        <footer>
            <div className={styles.footer}>
                <p>@ 2021 Nuchain</p>
                <button onClick={backToTop}>Back to top</button>
            </div>
        </footer>
        <style jsx>{`
            p {
                font-weight: bold;
            }
            
            button {
                float: right;
                margin-left: 77em;
                background:  #1f892b;
                border: 0;
                color: white;
                font-weight: bold;
                padding: 0.5em;
            }

            button:hover {
                opacity: 0.8;
                cursor: pointer;
            }
        `}</style>
        </>
    );
}

export default Footer;