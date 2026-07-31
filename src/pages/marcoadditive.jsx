import Link from "next/link";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import styles from "../styles/MarcoAdditive.module.css";

export default function MarcoAdditive() {
  return (
    <>
      <Menu />

      {/* HERO */}

      <section className={styles.hero}>
        <video autoPlay muted loop playsInline className={styles.heroVideo}>
          <source src="/static/videos/institucional.mp4" type="video/mp4" />
        </video>

        <div className={styles.overlay}></div>

        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>— MarcoAdditive</span>

              <h1>
                Impressão 3D para
                <span> projetos industriais.</span>
              </h1>

              <p>
                A MarcoAdditive é especializada em impressão 3D de alta
                qualidade, produzindo peças técnicas, protótipos e soluções
                personalizadas utilizando tecnologias avançadas e materiais de
                ponta para atender diferentes segmentos industriais.
              </p>

              <div className={styles.buttons}>
                <Link href="#tecnologias" className={styles.primary}>
                  Conheça as tecnologias
                </Link>

                <Link href="/contato" className={styles.secondary}>
                  Solicitar orçamento
                </Link>
              </div>
            </div>

            <div className={styles.heroCard}>
              <img src="/static/images/MarcoAdditive.jpg" alt="MarcoAdditive" />

              <div className={styles.heroInfo}>
                <small>Impressão 3D</small>

                <h3>Precisão, velocidade e inovação.</h3>

                <p>
                  Soluções para prototipagem rápida, pequenas séries e peças
                  especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}

      <section className={styles.about}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.content}>
              <span className={styles.eyebrow}>— Como funciona</span>

              <h2>A fabricação aditiva transforma ideias em realidade.</h2>

              <p>
                A impressão 3D é um método de fabricação aditiva que constrói
                objetos tridimensionais camada por camada a partir de um modelo
                digital, permitindo produzir componentes complexos com elevada
                precisão e excelente acabamento.
              </p>

              <p>
                Com foco em inovação e atendimento personalizado, a
                MarcoAdditive desenvolve soluções sob medida para protótipos,
                validação de projetos e produção em pequena escala.
              </p>
            </div>

            <div className={styles.imageBox}>
              <img src="/static/images/marcoadditive-maquina.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* TECNOLOGIAS */}

      <section id="tecnologias" className={styles.technologies}>
        <div className="container">
          <div className={styles.titleCenter}>
            <span className={styles.eyebrow}>— Tecnologias</span>

            <h2>Impressão 3D aditiva com materiais especiais.</h2>

            <p>
              Criação rápida de protótipos, produtos personalizados e
              componentes complexos para uma ampla variedade de aplicações
              industriais e comerciais.
            </p>
          </div>

          <div className={styles.cards}>
            <article className={styles.card}>
              <div className={styles.number}>01</div>

              <h3>SLA</h3>

              <p>
                Processo de impressão 3D que utiliza resina líquida
                fotossensível curada por laser ultravioleta, proporcionando
                excelente acabamento superficial, alta precisão dimensional e
                riqueza de detalhes.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.number}>02</div>

              <h3>SLS</h3>

              <p>
                Tecnologia que utiliza um laser de alta potência para sinterizar
                partículas de pó de material camada por camada, produzindo peças
                resistentes e complexas diretamente a partir de modelos CAD.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.number}>03</div>

              <h3>FDM</h3>

              <p>
                Método amplamente utilizado na impressão 3D onde um filamento
                termoplástico é aquecido e depositado camada por camada,
                oferecendo excelente custo-benefício para protótipos e peças
                funcionais.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <span className={styles.eyebrow}>— Desenvolvemos sua ideia</span>

            <h2>
              Transforme projetos em
              <span> peças reais.</span>
            </h2>

            <p>
              Nossa equipe está preparada para desenvolver soluções utilizando
              impressão 3D de alta precisão, reduzindo tempo de desenvolvimento
              e acelerando a inovação da sua empresa.
            </p>

            <div
              className={`${styles.buttons} flex items-center justify-center`}
            >
              <Link href="/contato" className={styles.primary}>
                Solicitar orçamento
              </Link>

              <Link href="/empresa" className={styles.secondary}>
                Conheça a Apolo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Rodape />
    </>
  );
}
