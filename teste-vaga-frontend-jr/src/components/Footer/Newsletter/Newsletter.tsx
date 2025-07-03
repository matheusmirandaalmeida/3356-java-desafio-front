import styles from './style.module.scss';

export default function Newsletter() {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.content}>
        <div>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <button type="submit">INSCREVER</button>
          <label className={styles.checkbox}>
            <input type="checkbox" /> Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  );
}
