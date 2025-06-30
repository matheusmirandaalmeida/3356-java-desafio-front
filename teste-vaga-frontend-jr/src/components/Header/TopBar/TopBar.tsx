import Icon from '../../Icon';
import styles from './styles.module.scss';

const TopBar = () => (
  <div className={styles.topBar}>
    <div className={styles.topBarContent}>
      <span className={styles.topBarItem}>
        <Icon name="shield" className={styles.checkIcon} />
        COMPRA <span className={styles.highlight}>100% SEGURA</span>
      </span>
      <span className={styles.topBarItem}>
        <Icon name="truck" className={styles.checkIcon} />
        <span className={styles.highlight}>FRETE GRÁTIS</span> ACIMA DE R$ 200
      </span>
      <span className={styles.topBarItem}>
        <Icon name="card" className={styles.checkIcon} />
        <span className={styles.highlight}>PARCELE</span> SUAS COMPRAS
      </span>
    </div>
  </div>
);

export default TopBar;