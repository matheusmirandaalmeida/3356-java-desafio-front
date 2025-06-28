import styles from './styles.module.scss';
import logo from '../../../assets/images/logo.svg';

const MainNav = () => (
  <div className={styles.mainNav}>
    <img 
      src={logo} 
      alt="Logo econverse" 
      className={styles.logoImage}
      />
    <nav className={styles.nav}>
      {['TODAS CATEGORIAS', 'SUPERMERCADO', 'LIVROS', 'MODA', 'OFERTAS DO DIA', 'ASSINATURA'].map((item) => (
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