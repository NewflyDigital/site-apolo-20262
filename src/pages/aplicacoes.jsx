import Link from "next/link";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import styles from "../styles/Aplicacoes.module.css";

const APLICACOES = [
  {
    titulo: "Agrícola",
    imagem: "/static/images/aplicacoes-agricola.jpg",
    texto:
      "Desenvolvemos componentes técnicos em polímeros para máquinas e implementos agrícolas, oferecendo resistência, confiabilidade e alto desempenho mesmo nas condições mais severas de operação.",
    itens: [
      "Resistência mecânica",
      "Fadiga e durabilidade",
      "Segurança",
      "Conforto",
      "Instrumentação",
      "Materiais",
      "Escoamento de fluidos líquidos e gases",
    ],
  },
  {
    titulo: "Automotivo",
    imagem: "/static/images/aplicacoes-automotivo.jpg",
    texto:
      "Fornecemos soluções para o segmento automotivo com elevada precisão dimensional, excelente acabamento e materiais de alta performance para aplicações técnicas.",
    itens: [
      "Resistência mecânica",
      "Fadiga e durabilidade",
      "Segurança",
      "Conforto",
      "Instrumentação",
      "Materiais",
      "Escoamento de fluidos líquidos e gases",
    ],
  },
  {
    titulo: "Implementos Rodoviários",
    imagem: "/static/images/aplicacoes-implementos.jpg",
    texto:
      "Produzimos peças técnicas destinadas ao segmento de implementos rodoviários, garantindo qualidade, robustez e elevada durabilidade para aplicações industriais.",
    itens: [
      "Resistência mecânica",
      "Fadiga e durabilidade",
      "Segurança",
      "Conforto",
      "Instrumentação",
      "Materiais",
      "Escoamentos",
    ],
  },
];

export default function Aplicacoes() {
  return (
    <>
      <Menu />

      {/* HERO */}

      <section className={styles.hero}>
        <img
          src="/static/images/fachada-apolo.jpg"
          alt=""
          className={styles.heroImage}
        />

        <div className={styles.overlay}></div>

        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>— Aplicações</span>

              <h1>
                Soluções para os principais
                <span> segmentos industriais.</span>
              </h1>

              <p>
                Atuamos com peças técnicas em polímeros para diferentes
                mercados, entregando resistência mecânica, qualidade, precisão e
                alto desempenho em aplicações críticas.
              </p>

              <div className={styles.heroButtons}>
                <Link href="#agricola" className={styles.primary}>
                  Conheça os segmentos
                </Link>

                <Link href="/contato" className={styles.secondary}>
                  Fale conosco
                </Link>
              </div>
            </div>

            <div className={styles.heroCard}>
              <img src="/static/images/estande-apolo.png" alt="Aplicações" />

              <div className={styles.heroInfo}>
                <small>Setores Atendidos</small>

                <h3>3 segmentos industriais</h3>

                <p>
                  Soluções desenvolvidas para diferentes aplicações com máxima
                  qualidade e desempenho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGRÍCOLA */}

      <section id="agricola" className={styles.application}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.image}>
              <img src={APLICACOES[0].imagem} alt={APLICACOES[0].titulo} />
            </div>

            <div className={styles.content}>
              <span className={styles.eyebrow}>— Segmento</span>

              <h2>{APLICACOES[0].titulo}</h2>

              <p>{APLICACOES[0].texto}</p>

              <ul>
                {APLICACOES[0].itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMOTIVO */}

      <section
        id="automotivo"
        className={`${styles.application} ${styles.reverse}`}
      >
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.content}>
              <span className={styles.eyebrow}>— Segmento</span>

              <h2>{APLICACOES[1].titulo}</h2>

              <p>{APLICACOES[1].texto}</p>

              <ul>
                {APLICACOES[1].itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.image}>
              <img src={APLICACOES[1].imagem} alt={APLICACOES[1].titulo} />
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTOS RODOVIÁRIOS */}

      <section id="implementos" className={styles.application}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.image}>
              <img src={APLICACOES[2].imagem} alt={APLICACOES[2].titulo} />
            </div>

            <div className={styles.content}>
              <span className={styles.eyebrow}>— Segmento</span>

              <h2>{APLICACOES[2].titulo}</h2>

              <p>{APLICACOES[2].texto}</p>

              <ul>
                {APLICACOES[2].itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <span className={styles.eyebrow}>— Soluções sob medida</span>

            <h2>
              Vamos desenvolver a solução ideal
              <span> para o seu projeto.</span>
            </h2>

            <p>
              Nossa equipe está preparada para atender sua empresa com
              tecnologia, inovação e capacidade produtiva para os mais diversos
              segmentos industriais.
            </p>

            <div
              className={`${styles.heroButtons} flex items-center justify-center`}
            >
              <Link href="/contato" className={styles.primary}>
                Solicitar orçamento
              </Link>

              <Link href="/servicos" className={styles.secondary}>
                Conheça nossos serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Rodape />
    </>
  );
}
