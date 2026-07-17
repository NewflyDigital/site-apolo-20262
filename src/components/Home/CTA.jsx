import Link from "next/link";
import styles from "../../styles/CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>— Fale com nosso time</p>

          <h2 className={styles.title}>
            Conheça nossas <br />
            <span>soluções personalizadas.</span>
          </h2>

          <p className={styles.description}>
            Qualidade, tecnologia e confiança em cada projeto. Conte com a Apolo
            para desenvolver a peça certa, do molde à produção seriada.
          </p>

          <div className={styles.buttons}>
            <Link href="/contato" className={styles.primary}>
              Fale com nosso time
              <span>↗</span>
            </Link>

            <Link href="/servicos" className={styles.secondary}>
              Ver serviços
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
