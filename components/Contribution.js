import styles from "../styles/Home.module.css";

const Contribution = () => {
  return (
    <>
      <div className={styles.main} id="contribution">
        <h1 className={styles.title2}>Contribution</h1>
        <h3>
          Tertarik dengan proyek ini? Anda bisa ikut kontribusi dengan beberapa
          cara:
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
          box-shadow: 10px 10px 5px grey;
        }
      `}</style>
    </>
  );
};

export default Contribution;
