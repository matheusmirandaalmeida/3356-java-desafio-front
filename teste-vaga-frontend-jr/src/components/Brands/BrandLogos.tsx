import styles from './style.module.scss';
import logo from '../../assets/images/logo.svg';

export default function BrandLogos() {
  return (
    <section className={styles.brandSection}>
      <h2 className={styles.title}>Navegue por marcas</h2>
      <div className={styles.logoContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={styles.logoCircle}>
            <img src={logo} alt={`Marca ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
