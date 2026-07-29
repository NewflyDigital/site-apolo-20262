import Link from "next/link";
import styles from "../../styles/Services.module.css";

const cards = [
  {
    tag: "Aplicação",
    title: "Agrícola",
    desc: "Componentes técnicos desenvolvidos para máquinas e implementos agrícolas, oferecendo elevada resistência mecânica, durabilidade e confiabilidade mesmo nas aplicações mais exigentes.",
    img: "/static/images/aplicacoes-agricola.jpg",
  },
  {
    tag: "Aplicação",
    title: "Automotivo",
    desc: "Soluções em peças poliméricas para a indústria automotiva, com alto padrão de qualidade, precisão dimensional e desempenho para aplicações técnicas.",
    img: "/static/images/aplicacoes-automotivo.jpg",
  },
  {
    tag: "Aplicação",
    title: "Implementos Rodoviários",
    desc: "Peças desenvolvidas para implementos rodoviários com foco em resistência estrutural, segurança, excelente acabamento e longa vida útil.",
    img: "/static/images/aplicacoes-implementos.jpg",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <p className={styles.eyebrow}>— Setores atendidos</p>

            <h2>Aplicações para diferentes segmentos da indústria.</h2>
          </div>

          <Link href="/aplicacoes" className={styles.all}>
            Ver todas as aplicações
            <span>↗</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.image}>
                <img src={card.img} alt={card.title} />
              </div>

              <div className={styles.content}>
                <span className={styles.tag}>{card.tag}</span>

                <h3>{card.title}</h3>

                <p>{card.desc}</p>

                <div className={styles.link}>
                  <span>Acessar</span>
                  <strong>→</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
