import styles from './styles.module.scss';

const PromoBanner = () => (
  <div className={styles.promoBanner}>
    <div className={styles.content}>
      <h2>Venha conhecer nossas promoções</h2>
      <p>50% off nos produtos</p>
      <button className={styles.button}>Ver produto</button>
    </div>
  </div>
);

export default PromoBanner;