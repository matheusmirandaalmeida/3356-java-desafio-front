import styles from './styles.module.scss';

const PromoBanner = () => (
  <div className={styles.promoBanner}>
    <div className={styles.content}>
      <h2>Venha conhecer nossas promoções</h2>
      <p><span>50% off</span> nos produtos</p>
      <button className={styles.promoButton}>Ver produto</button>
    </div>
  </div>
);

export default PromoBanner;