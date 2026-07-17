import styles from "../../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src="/static/images/hero-industrial.jpg"
          alt="Planta industrial de injeção de plásticos"
        />
      </div>

      <div className={styles.overlayOne}></div>
      <div className={styles.overlayTwo}></div>
      <div className={styles.overlayThree}></div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.box}>
            <p className={styles.eyebrow}>
              — Desde 2014 · Uma empresa do grupo Marcopolo
            </p>

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
              <Link href="/empresa" className={styles.primary}>
                Conheça nossas soluções
                <span>↗</span>
              </Link>

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
    </section>
  );
}
