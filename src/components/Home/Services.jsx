import Link from "next/link";
import styles from "../../styles/Services.module.css";

const cards = [
  {
    tag: "Serviço",
    title: "Try-Out",
    desc: "Injetoras estrategicamente preparadas para atender uma ampla gama de tamanhos e complexidades de moldes durante a validação.",
    img: "/static/images/card-digital.jpg",
  },
  {
    tag: "Serviço",
    title: "Montagem",
    desc: "Equipe altamente qualificada oferecendo suporte abrangente na montagem de conjuntos, sub-conjuntos e acabamento final.",
    img: "/static/images/card-robotics.jpg",
  },
  {
    tag: "Serviço",
    title: "Produção",
    desc: "Linha de produção contemporânea e altamente otimizada, capaz de entregar volumes escaláveis com consistência de qualidade.",
    img: "/static/images/card-energy.jpg",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <p className={styles.eyebrow}>— Nossos serviços</p>

            <h2>Serviços completos em peças plásticas.</h2>
          </div>

          <Link href="/servicos" className={styles.all}>
            Ver todos os serviços
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
