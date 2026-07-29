import styles from "../../styles/Timeline.module.css";

const events = [
  {
    year: "Agrícola",
    title: "Componentes para o campo",
    desc: "Peças com foco em resistência mecânica, durabilidade, segurança e escoamento de fluidos.",
  },
  {
    year: "Automotivo",
    title: "Peças técnicas para veículos",
    desc: "Componentes que atendem exigências de fadiga, conforto, instrumentação e materiais especiais.",
  },
  {
    year: "Implementos",
    title: "Implementos rodoviários",
    desc: "Soluções robustas para o transporte rodoviário — resistência, segurança e escoamentos.",
  },
  {
    year: "Marco Additive",
    title: "Impressão 3D",
    desc: "Fabricação aditiva que constrói objetos tridimensionais camada por camada a partir de modelos digitais.",
  },
  {
    year: "ISO 9001",
    title: "Gestão da qualidade",
    desc: "Sistema de Gestão da Qualidade certificado, garantindo padrões consistentes em toda a operação.",
  },
  {
    year: "ISO 14001",
    title: "Gestão ambiental",
    desc: "Sistema de Gestão Ambiental certificado, com responsabilidade sobre o ciclo produtivo.",
  },
];

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <div className="container">
        <p className={styles.eyebrow}>— Onde atuamos</p>

        <h2>Soluções técnicas para indústrias exigentes.</h2>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.fade}></div>

        <div className={styles.line}></div>

        <div className={styles.scroll}>
          {events.map((item) => (
            <article key={item.year} className={styles.card}>
              <span className={styles.year}>{item.year}</span>

              <div className={styles.bar}>
                <span></span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
