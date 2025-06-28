import styles from './styles.module.scss';

const TopBar = () => (
  <div className={styles.topBar}>
    <div className={styles.content}>
      <span>Compre 100% segura</span>
      <span>Frete grátis acima de R$ 200</span>
      <span>Percebe suas compras</span>
    </div>
  </div>
);

export default TopBar;