import Link from "next/link";
import styles from "../../styles/News.module.css";

const posts = [
  {
    img: "/static/images/news-1.jpg",
    cat: "Injeção",
    date: "Capacidade",
    title: "Injetoras de até 1.400 toneladas para peças de alta complexidade.",
  },
  {
    img: "/static/images/news-2.jpg",
    cat: "Produção",
    date: "Otimização",
    title: "Linha de produção contemporânea e altamente otimizada.",
  },
  {
    img: "/static/images/news-3.jpg",
    cat: "Apolo Tecnologia ",
    date: "Institucional",
    title: "Uma empresa com solidez e alcance global.",
  },
];

export default function News() {
  return (
    <section className={styles.news}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <p className={styles.eyebrow}>— Diferenciais</p>

            <h2>Por que a Apolo.</h2>
          </div>

          <Link href="/empresa" className={styles.link}>
            Sobre a empresa
            <span>→</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link href="/empresa" key={post.title} className={styles.card}>
              <div className={styles.image}>
                <img src={post.img} alt={post.title} />
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.cat}</span>

                  <span className={styles.dot}></span>

                  <span>{post.date}</span>
                </div>

                <h3>{post.title}</h3>

                <div className={styles.more}>
                  Saber mais
                  <strong>→</strong>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
