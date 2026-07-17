import styles from "../../styles/Stats.module.css";

export default function Stats() {
  const stats = [
    { value: "10+", label: "Anos de operação" },
    { value: "1400t", label: "Capacidade de fechamento" },
    { value: "3", label: "Setores atendidos" },
    { value: "2", label: "Certificações ISO" },
  ];

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <p className={styles.eyebrow}>— Da eficiência ao molde</p>

            <h2 className={styles.title}>
              Excelência moldada com maestria certificada.
            </h2>
          </div>

          <p className={styles.text}>
            Qualidade, tecnologia e confiança pautam a execução de todos os
            projetos da Apolo Tecnologia, com processos totalmente auditados
            pelas normas ISO 9001 e ISO 14001.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((item) => (
            <div className={styles.card} key={item.label}>
              <div className={styles.number}>{item.value}</div>

              <p className={styles.label}>{item.label}</p>

              <div className={styles.line}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
