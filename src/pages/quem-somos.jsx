import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import { useRouter } from "next/router";
import styles from "../styles/CTA.module.css";

export default function Quem() {
  const router = useRouter();

  return (
    <>
      <Menu />

      <section className={styles.hero}>
        <div className={styles.interno}>
          <div className={styles.heroText}>
            <span>QUEM SOMOS</span>

            <h1>
              Mais do que transportar cargas.
              <br />
              Movemos confiança.
            </h1>

            <p>
              A Mov.Log conecta empresas ao futuro através de soluções
              logísticas seguras, eficientes e transparentes.
            </p>

            <a href="https://wa.me/5554991429243">Conheça nossas operações</a>
          </div>

          <img src="/static/images/blog.png" alt="Operação logística Mov.Log" />
        </div>
      </section>

      <section className={styles.historia}>
        <div className={styles.interno}>
          <div>
            <span className={styles.tag}>NOSSA HISTÓRIA</span>

            <h2>Logística pensada para gerar resultados.</h2>
          </div>

          <div className={styles.texto}>
            <p>
              A Mov.Log nasceu com o propósito de oferecer mais do que
              transporte: entregar segurança, previsibilidade e confiança para
              empresas que dependem de uma operação eficiente.
            </p>

            <p>
              Com frota moderna, tecnologia e uma equipe preparada,
              desenvolvemos soluções personalizadas para diferentes necessidades
              logísticas.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.diferenciais}>
        <div className={styles.internoColumn}>
          <h2>Nosso jeito de trabalhar</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <span>01</span>
              <h3>Segurança</h3>
              <p>Cuidado em todas as etapas da operação.</p>
            </div>

            <div className={styles.card}>
              <span>02</span>
              <h3>Pontualidade</h3>
              <p>Compromisso com prazos e resultados.</p>
            </div>

            <div className={styles.card}>
              <span>03</span>
              <h3>Transparência</h3>
              <p>Informações claras durante todo processo.</p>
            </div>

            <div className={styles.card}>
              <span>04</span>
              <h3>Eficiência</h3>
              <p>Processos inteligentes para reduzir custos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.estrutura}>
        <div className={styles.interno}>
          <img src="/static/images/blog.png" alt="Estrutura logística" />

          <div>
            <span className={styles.tag}>NOSSA ESTRUTURA</span>

            <h2 className="text-[#1e1e1e]">
              Uma operação preparada para grandes desafios
            </h2>

            <p>
              Localizada em Caxias do Sul - RS, a Mov.Log possui estrutura
              estratégica para atender operações regionais e nacionais.
            </p>

            <ul>
              <li>Frota moderna</li>
              <li>Monitoramento 24h</li>
              <li>Equipe especializada</li>
              <li>Gestão operacional</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.processo}>
        <div className={styles.internoColumn}>
          <span className={styles.tag}>COMO TRABALHAMOS</span>

          <h2>Um processo pensado para entregar eficiência.</h2>

          <div className={styles.timeline}>
            <div>
              <span>01</span>
              <h3>Planejamento</h3>
              <p>Entendemos sua operação e criamos a melhor estratégia.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Execução</h3>
              <p>Equipe preparada para garantir segurança e qualidade.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Monitoramento</h3>
              <p>Acompanhamento em tempo real durante todo percurso.</p>
            </div>

            <div>
              <span>04</span>
              <h3>Entrega</h3>
              <p>Resultado final com transparência e pontualidade.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.numeros}>
        <div className={styles.interno}>
          <div>
            <strong>24h</strong>
            <span>Monitoramento</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Comprometimento</span>
          </div>

          <div>
            <strong>Nacional</strong>
            <span>Cobertura logística</span>
          </div>

          <div>
            <strong>+1</strong>
            <span>Parceiro estratégico</span>
          </div>
        </div>
      </section>

      <section className={styles.valores}>
        <div className={styles.internoColumn}>
          <h2>Nossa missão</h2>

          <p>
            Transformar operações logísticas em experiências mais seguras,
            eficientes e previsíveis para nossos clientes.
          </p>

          <div className={styles.valorGrid}>
            <div>
              <h3>Visão</h3>
              <p>
                Ser referência nacional em soluções logísticas inteligentes e
                confiáveis.
              </p>
            </div>

            <div>
              <h3>Valores</h3>
              <p>
                Segurança, transparência, compromisso e evolução contínua fazem
                parte da nossa essência.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <h2>
            Sua operação merece
            <br />
            mais eficiência.
          </h2>

          <p>
            Converse com nossa equipe e encontre a solução ideal para sua
            logística.
          </p>

          <a href="https://wa.me/5554991429243">Solicitar proposta</a>
        </div>
      </section>

      <Rodape />

      <Whats />
    </>
  );
}
