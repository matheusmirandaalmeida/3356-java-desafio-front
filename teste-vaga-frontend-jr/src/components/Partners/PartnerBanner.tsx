import styles from './styles.module.scss';

export default function PartnerBanner() {
  return (
    <section className={styles.partnerSection}>
      <div className={styles.partnerCard}>
        
        <div className={styles.content}>
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur u...</p>
          <button>CONFIRA</button>
        </div>
      </div>
      <div className={styles.partnerCard}>
        <div className={styles.content}>
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur u...</p>
          <button>CONFIRA</button>
        </div>
      </div>
    </section>
  );
}
