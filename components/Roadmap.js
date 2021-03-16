import styles from "../styles/Home.module.css";

const Roadmap = () => {
  return (
    <>
      <div className={styles.main} id="roadmap">
        <h1 className={styles.title2}>Roadmap</h1>
        <h2>Nuchain akan dikembangan dalam <strong>6 fase:</strong></h2><hr></hr>
        <div className="wrapper">
          <div className="row">
            <div className="column">
              <div className="left-column">
                <h3>Fase 00<pre>
                  Inisiasi</pre></h3>
              </div>
            </div>
            <div className="column">
              <div className="right-column">
                <p>
                  Marupakan fase awal pengumpulan dukungan dan finalisasi desain
                  sistem. Pada fase ini sistem telah jalan di versi ujicoba,
                  runtime versi 0.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="left-column">
                <h3>Fase 01 <pre>
                  Genesis</pre></h3>
              </div>
            </div>
            <div className="column">
              <div className="right-column">
                <p>
                  Merupakan fase awal sistem Nuchain mulai dijalankan, pada fase
                  ini Nuchain menggunakan mode PoA (Proof of Authority) sembari
                  menunggu terkumpulnya jumlah validator independen yang cukup
                  untuk nantinya akan beralih ke mode NPoS (Nominated Proof of
                  Stake)
                </p>
                <p>Pada fase ini pengguna awal bisa melakukan:</p>
                <ol>
                  <li>Klaim token dari fase 00</li>
                  <li>
                    Stake token dan mengajukan diri untuk menjadi validator atau
                    nominator
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="left-column">
                <h3>Fase 02 <pre>
                  NPoS</pre></h3>
              </div>
            </div>
            <div className="column">
              <div className="right-column">
                <p>
                  Pada masa ini jaringan Nuchain sudah tidak lagi menggunakan
                  PoA, tetapi telah beralih ke NPoS (Nominated Proof of Stake)
                  yang mana jaringan telah dijalankan oleh para validator
                  independen secara terdesentralisasi.
                </p>
                <p>
                  Walaupun PoA telah digantikan dengan NPoS namun masih ada
                  fitur Sudo yang digunakan oleh otoritas Nuchain untuk
                  keperluan mengelola jaringan validator dan upgrade ke
                  fase-fase berikutnya.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="left-column">
                <h3>Fase 03 <pre>
                  Governance</pre></h3>
              </div>
            </div>
            <div className="column">
              <div className="right-column">
                <p>Merupakan fase ujicoba konsep governance di Nuchain.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="left-column">
                <h3>Fase 04 <pre>
                  Revolt</pre></h3>
              </div>
            </div>
            <div className="column">
              <div className="right-column">
                <p>
                  Fase revolusi penggantian sistem otoriter menjadi sistem
                  demokrasi. Pada fase ini fitur Sudo akan dihapus, dan setiap
                  keputusan selanjutnya akan ditentukan oleh dewan dan komite
                  teknis.
                </p>
                <p>
                  Para anggota dewan dipilih oleh user, sementara komite teknis
                  pada fase ini adalah para pengembang awal.
                </p>
                <p>
                  Fungsi-fungsi RPC atau Ekstrinsik strategis hanya bisa
                  dieksekusi (dispatch) berdasarkan kesepakatan bersama dewan
                  dan komite teknis menggunakan sistem voting.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="left-column">
                <h3>Fase 05 <pre>
                  Pengembangan</pre></h3>
              </div>
            </div>
            <div className="column">
              <div className="right-column">
                <p>
                  Fase pengembangan untuk memaksimalkan pemanfaatan Nuchain
                  dalam hal layanan publik dan good governance.
                </p>
                <p>
                  Pada fase ini fitur smart contract akan diaktifkan, dan user
                  bisa mulai membuat DApps di atas jaringan Nuchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        div {
          background: #309a42;
          width: 100%;
        }

        .wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin: 1em;
        }

        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          transition: color 0.15s ease, border-color 0.15s ease;
          padding: 1.1rem;
          margin: 0.5rem 0;
        }

        .column {
          display: flex;
          flex-direction: column;
          flex-basis: 100%;
          flex: 1;
        }

        .right-column,
        .left-column {
          margin: 1em;
          text-align: center;
        }

        .left-column h3,
        .right-column h3 {
          text-align: center;
          font-size: 1.8rem;
          color: #dceade;
        }

        .left-column p,
        .right-column p{
          display: flex;
          text-align: center;
          font-size: 1.25rem;
          line-height: 1.5;
          color: #fff;
          width: 92%;
        }

        .right-column ol {
          display: flex;
          text-align: justify;
          font-size: 1.1rem;
          line-height: 2;
          display: block;
          color: #fff;
        }

        .row:hover {
          border: 3.5px solid #000;
          box-shadow: 10px 10px 3px black;
        }

        h2 {
          color: #d8ebb8;
        }

        h1 {
          color: #fffcf2;
        }

        .row:hover pre {
          font-size: 1.3em;
          font-weight: bold;
          color: #015718;
        }

        hr {
          width: 70%;
          margin-bottom: 2%;
          border: 0;
          height: 2px;
          background: linear-gradient(to right, #309a42, #fff, #309a42);
        }

      `}</style>
    </>
  );
};

export default Roadmap;
