import styles from './styles.module.scss';
import logo from '../../../assets/images/logo.svg';
import Icon from '../../Icon';
import TruckIcon from '../../icons/TruckIcon';
import GroupIcon from '../../icons/GroupIcon';

import UserIcon from '../../icons/UserIcon';
import HeartIcon from '../../icons/HeartIcon';
import CartIcon from '../../icons/CartIcon';

const MainNav = () => (
  <div className={styles.mainNav}>
    
    <div className={styles.topSection}>
      <img 
        src={logo} 
        alt="Logo econverse" 
        className={styles.logoImage}
      />

      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="O que você está buscando?" 
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <Icon name="magnifyglass" className={styles.searchIcon} />
        </button>
      </div>

      <div className={styles.iconsGroup}>
        <div className={styles.iconWrapper}>
          <CartIcon className={styles.navIcon} />
        </div>
        <div className={styles.iconWrapper}>
          <UserIcon className={styles.navIcon} />
        </div>
        <div className={styles.iconWrapper}>
          <HeartIcon className={styles.navIcon} />
        </div>
        <div className={styles.iconWrapper}>
          <TruckIcon className={styles.navIcon} />
        </div>
      </div>
    </div>

    <nav className={styles.nav}>
      {['TODAS CATEGORIAS', 'SUPERMERCADO', 'LIVROS', 'MODA', 'LANÇAMENTOS', 'OFERTAS DO DIA', 'ASSINATURA'].map((item) => (
        <a 
          key={item}
          href="#"
          className={styles.navLink}
        >
          {item}
        </a>
      ))}
    </nav>
  </div>
);

export default MainNav;