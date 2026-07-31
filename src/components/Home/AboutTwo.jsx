import Link from "next/link";
import styles from "../../styles/AboutTwo.module.css";

export default function AboutTwo() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            <p className={styles.eyebrow}>— Aplicações</p>

            <h2>Peças que atendem os setores mais exigentes.</h2>

            <p className={styles.description}>
              Fornecemos componentes plásticos para as indústrias Agrícola,
              Automotiva e de Implementos Rodoviários, atendendo requisitos
              críticos de resistência mecânica, fadiga, durabilidade, segurança,
              conforto e escoamento de fluidos.
            </p>

            <div className={styles.iso}>
              <div>
                <h3>ISO 9001</h3>
                <span>Gestão da qualidade</span>
              </div>

              <div>
                <h3>ISO 14001</h3>
                <span>Gestão ambiental</span>
              </div>
            </div>

            <Link href="/aplicacoes" className={styles.button}>
              Ver aplicações
              <span>↗</span>
            </Link>
          </div>

          <div className={styles.image}>
            <img src="/static/images/Interna-Apolo.jpg" alt="" />
          </div>
        </div>

        <div className={styles.banner}>
          <img src="/static/images/aerea-apolo2.jpg" alt="" />

          <div className={styles.overlay}></div>

          <div className={styles.bannerContent}>
            <div>
              <p>02 — Marco · Impressão 3D</p>

              <h3>
                Fabricação aditiva,
                <br />
                camada por camada.
              </h3>
            </div>

            <Link href="/impressao-3d" className={styles.bannerButton}>
              Ver mais
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
