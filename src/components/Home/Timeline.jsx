import styles from "../../styles/Timeline.module.css";

const events = [
  {
    year: "2014",
    step: "01",
    title: "Fundação da Apolo",
    date: "Março • 2014",
    image: "/static/images/timeline-1.jpg",
    desc: "Nasce a Apolo Tecnologia com foco em transformação de polímeros para a indústria brasileira.",
  },
  {
    year: "2018",
    step: "02",
    title: "Expansão Industrial",
    date: "Agosto • 2018",
    image: "/static/images/timeline-2.jpg",
    desc: "Ampliação do parque fabril e aquisição de novas injetoras para aumento da capacidade produtiva.",
  },
  {
    year: "2021",
    step: "03",
    title: "Automação",
    date: "Novembro • 2021",
    image: "/static/images/timeline-3.jpg",
    desc: "Integração de robôs industriais e otimização dos processos produtivos.",
  },
  {
    year: "Hoje",
    step: "04",
    title: "5.000m² de tecnologia",
    date: "Farroupilha • RS",
    image: "/static/images/timeline-4.jpg",
    desc: "Estrutura moderna preparada para atender projetos de alta complexidade em todo o Brasil.",
  },
];

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>— Nossa estrutura</span>

          <h2>Números que representam a força da Apolo Tecnologia.</h2>

          <p>
            Investimos continuamente em tecnologia, infraestrutura e pessoas
            para entregar soluções confiáveis em transformação de plásticos para
            diversos segmentos industriais.
          </p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.line}></div>

          {events.map((item) => (
            <article
              key={item.number}
              className={styles.card}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.number}>{item.step}</div>

              <div className={styles.bottom}>
                <span>{item.date}</span>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>

              <div className={styles.year}>{item.year}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
