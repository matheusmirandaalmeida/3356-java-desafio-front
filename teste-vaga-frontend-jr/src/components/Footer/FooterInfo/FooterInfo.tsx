import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import LinkedinIcon from '../../icons/linkedin';
import styles from './style.module.scss';


export default function FooterInfo() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.columnLogo}>
          <h2><span>ec</span>onverse</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className={styles.socialIcons}>
            <InstagramIcon className={styles.icon} />
            <FacebookIcon className={styles.icon} />
            <LinkedinIcon className={styles.icon} />
          </div>
        </div>

        <div className={styles.verticalLine}></div>

        <div className={styles.columns}>
          <div>
            <h4>Institucional</h4>
            <ul>
              <li>Sobre Nós</li>
              <li>Movimento</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
          <div>
            <h4>Ajuda</h4>
            <ul>
              <li>Suporte</li>
              <li>Fale Conosco</li>
              <li>Perguntas Frequentes</li>
            </ul>
          </div>
          <div>
            <h4>Termos</h4>
            <ul>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
              <li>Troca e Devolução</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyRight}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </footer>
  );
}
