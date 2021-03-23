import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import hljs from "highlight.js";
import powershell from "highlight.js/lib/languages/powershell";
hljs.registerLanguage("powershell", powershell);

const Installation = () => {
  useEffect(() => {
    hljs.initHighlighting();
    console.log(window.innerWidth);
  }, []);

  return (
    <>
      {/* FIXME: highlight.js render error due to untriggered useEffect */}
      <div className={styles.main} id="installation">
        <h1 className={styles.title2}>Installation</h1>
        <hr></hr>
        <h3>Docker</h3>
        <pre>
          <code className="powershell">
            <pre>$ docker run --rm \</pre>
            <pre> -v '/var/data:/data' \</pre>
            <pre> -p '9933:9933' \</pre>
            <pre> -p '9944:9944' \</pre>
            <pre> -p '30333:30333' \</pre>
            <pre> --name nuchain anvie/nuchain:latest-alpine \</pre>
            <pre> nuchain --base-path=/data</pre>
          </code>
        </pre>
        <h3>MacOS</h3>
        <pre>
          <code className="powershell">
            <pre>
              /bin/bash -c "$(curl -fsSL
              https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
            </pre>
            <pre></pre>
            <pre>brew update </pre>
            <pre>brew install openssl cmake</pre>
            <pre># Install Homebrew if necessary https://brew.sh/ </pre>
            <pre>
              # Make sure Homebrew is up-to-date, install openssl and cmake{" "}
            </pre>
          </code>
        </pre>
        <h3>Ubuntu/Debian</h3>
        <pre>
          <code className="powershell">
            <pre>sudo apt update </pre>
            <pre>
              sudo apt install -y cmake pkg-config libssl-dev git
              build-essential clang libclang-dev curl libz-dev
            </pre>
            <pre># May prompt for location information </pre>
          </code>
        </pre>
        <h3>Arch Linux</h3>
        <pre>
          <code className="powershell">
            <pre>
              pacman -Syu --needed --noconfirm cmake gcc openssl-1.0 pkgconf git
              clang{" "}
            </pre>
            <pre>export OPENSSL_LIB_DIR="/usr/lib/openssl-1.0" </pre>
            <pre>export OPENSSL_INCLUDE_DIR="/usr/include/openssl-1.0"</pre>
          </code>
        </pre>
        <p>
          <a
            href="https://github.com/nusantarachain/nuchain#instalasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lebih lengkapnya klik disini
          </a>
        </p>
      </div>
      <style jsx>{`
        div {
          background: #ddeadf;
          width: 100%;
        }
        h3 {
          font-size: 2rem;
        }
        a {
          color: green;
          font-weight: bold;
        }
        a:hover {
          opacity: 0.6;
        }

        code {
          border-left: 9px solid #7f8779;
          border-radius: 5px;
          font-size: 1.1em;
        }

        code:hover {
          border-left: 9px solid #039113;
        }

        hr {
          width: 70%;
          margin-bottom: 2%;
          border: 0;
          height: 2px;
          background: linear-gradient(to right, #ebfff6, #02a808, #ebfff6);
        }

        @media (max-width: 600px) {
          code {
            width: 100%;
            margin: auto;
            display: flex;
            flex-direction: column;
          }

          pre {
            margin-left: 0.5rem;
            white-space: pre-wrap;
          }
        }

        @media (min-width: 601px) and (max-width: 1180px) {
          code {
            width: 100%;
            margin auto;
            display: flex;
            flex-direction: column;
          }
          
          pre {
            margin-left: 0.5rem;
            white-space: pre-wrap;
          }
        }
      `}</style>
    </>
  );
};

export default Installation;
