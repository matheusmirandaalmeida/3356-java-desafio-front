import Icon from '../../Icon';
import styles from './styles.module.scss';
import logo from '../../../assets/images/logo.svg';

const MainNav = () => {
  const navItems = [
    'TODAS CATEGORIAS',
    'SUPERMERCADO',
    'LIVROS',
    'MODA',
    'LANÇAMENTOS',
    'OFERTAS DO DIA',
    'ASSINATURA',
  ];

  return (
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
            <Icon name="group" className={styles.navIcon} />
          </div>
          <div className={styles.iconWrapper}>
            <Icon name="heart" className={styles.navIcon} />
          </div>
          <div className={styles.iconWrapper}>
            <Icon name="user" className={styles.navIcon} />
          </div>
          <div className={styles.iconWrapper}>
            <Icon name="cart" className={styles.navIcon} />
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <a 
            key={item}
            href="#"
            className={styles.navLink}
          >
            {item === 'ASSINATURA' ? (
              <span className={styles.assinaturaLink}>
                <Icon name="crown" className={styles.assinaturaIcon} />
                {item}
              </span>
            ) : (
              item
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
