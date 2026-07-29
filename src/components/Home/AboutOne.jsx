import Link from "next/link";
import styles from "../../styles/AboutOne.module.css";

export default function AboutOne() {
  const itens = [
    "Sistemas robotizados de última geração",
    "Ampla gama de tamanhos e complexidades",
    "Extração precisa e otimização contínua",
  ];

  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageColumn}>
            <div className={styles.imageBox}>
              <img
                src="/static/images/precision-gears.jpg"
                alt="Injetora de plástico de alta precisão"
              />

              <div className={styles.overlay}></div>

              <div className={styles.badge}>
                <span>01 — Injeção</span>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>— Capacidade</p>

            <h2>Marco Additive</h2>

            <p className={styles.description}>
              Nossas máquinas incorporam o que há de mais avançado em
              tecnologia. Cada injetora é equipada com sistemas robotizados de
              última geração que efetuam a extração precisa de peças e otimizam
              a produção, elevando a eficiência ao máximo.
            </p>

            <ul className={styles.list}>
              {itens.map((item) => (
                <li key={item}>
                  <span className={styles.icon}>+</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/processos" className={styles.link}>
              Conhecer processo de injeção
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
