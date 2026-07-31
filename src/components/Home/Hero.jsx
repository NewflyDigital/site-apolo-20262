import styles from "../../styles/Hero.module.css";
import Link from "next/link";

import { useState } from "react";

export default function Hero() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src="/static/images/fachada-apolo.jpg"
          alt="Planta industrial de injeção de plásticos"
        />
      </div>

      <div className={styles.overlayOne}></div>
      <div className={styles.overlayTwo}></div>
      <div className={styles.overlayThree}></div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.box}>
            <h1>
              Injeção de peças
              <br />
              <span>com tecnologia e inovação.</span>
            </h1>

            <p className={styles.description}>
              Soluções globais em injeção de plásticos técnicos com alto padrão
              de acabamento, qualidade e desempenho — da eficiência ao molde,
              com maestria certificada.
            </p>

            <div className={styles.buttons}>
              <button
                type="button"
                onClick={() => setOpenVideo(true)}
                className={styles.primary}
              >
                Veja nosso vídeo
                <span>▶</span>
              </button>

              <Link href="/contato" className={styles.secondary}>
                Fale com nosso time
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scroll}>
        <span>ROLE</span>

        <div className={styles.arrow}>↓</div>
      </div>

      {openVideo && (
        <div className={styles.videoModal} onClick={() => setOpenVideo(false)}>
          <div className={styles.videoBox} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeVideo}
              onClick={() => setOpenVideo(false)}
            >
              ✕
            </button>

            <video controls autoPlay playsInline className={styles.video}>
              <source src="/static/videos/institucional.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
