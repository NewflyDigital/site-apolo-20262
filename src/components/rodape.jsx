import Link from "next/link";
import styles from "../styles/Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className={styles.interno}>
        <div className={styles.topo}>
          <div className={styles.colunaLogo}>
            <img
              src="/static/images/logo-horizontal-preto.png"
              className={styles.logo}
              alt="Mov.Log"
            />

            <h2>Mais do que transporte, entregamos crescimento.</h2>

            <p>
              Soluções completas em transporte, cross docking e operador
              logístico para empresas que precisam de eficiência, segurança e
              pontualidade.
            </p>

            <a
              href="https://wa.me/5554991429243"
              target="_blank"
              className={styles.botao}
              rel="noreferrer"
            >
              Solicitar proposta
            </a>
          </div>

          <div className={styles.coluna}>
            <h3>Empresa</h3>

            <a href="#banner">Início</a>
            <a href="#operacoes">Operações</a>
            <a href="#tecnologia">Tecnologia</a>
            <a href="#contato">Contato</a>
          </div>

          <div className={styles.coluna}>
            <h3>Contato</h3>

            <a href="tel:+5554991429243">
              Tiago Ramos
              <br />
              (54)99142-9243
            </a>

            <a href="tel:+5554981348799">
              Maicon Fin
              <br />
              (54)98134-8799
            </a>

            <a href="tel:+5554984471413">
              Jaine Meras
              <br />
              (54)98447-1413
            </a>
          </div>

          <div className={styles.coluna}>
            <h3>Localização</h3>

            <p>
              Caxias do Sul
              <br />
              Rio Grande do Sul
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>©2026 Mov.Log. Todos os direitos reservados.</p>

          <p>
            Desenvolvido por&nbsp;
            <a href="https://alagencia.com.br" target="_blank" rel="noreferrer">
              AL Agência
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
