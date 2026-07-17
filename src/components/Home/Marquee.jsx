import styles from "../../styles/Marquee.module.css";

const items = [
  "INJEÇÃO DE PLÁSTICOS",
  "TRY-OUT",
  "MONTAGEM",
  "PRODUÇÃO",
  "IMPRESSÃO 3D",
  "ISO 9001",
  "ISO 14001",
  "AUTOMAÇÃO ROBOTIZADA",
];

export default function Marquee() {
  return (
    <section className={styles.marquee}>
      <div className={styles.track}>
        {[...items, ...items].map((item, index) => (
          <span key={index} className={styles.item}>
            {item}

            <span className={styles.dot}>◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
