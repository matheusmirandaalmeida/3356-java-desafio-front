import styles from './styles.module.scss';
import tecnologia from '../../../assets/images/tecnologia.png';
import mercado from '../../../assets/images/mercado.png';
import drink from '../../../assets/images/drink.png';
import ferramenta from '../../../assets/images/ferramenta.png';
import saude from '../../../assets/images/saude.png';
import sport from '../../../assets/images/sport.png';
import moda from '../../../assets/images/moda.png';

const categories = [
  { name: 'Tecnologia', image: tecnologia },
  { name: 'Supermercado', image: mercado },
  { name: 'Bebidas', image: drink },
  { name: 'Ferramentas', image: ferramenta },
  { name: 'Saúde', image: saude },
  { name: 'Esportes e Fitness', image: sport },
  { name: 'Moda', image: moda }
];

const CategoriesBar = () => (
  <div className={styles.categoriesBar}>
    {categories.map((category) => (
      <div key={category.name} className={styles.categoryItem}>
        
        <div className={styles.iconWrapper}>
          <img 
            src={category.image} 
            alt={category.name}
            className={styles.categoryIcon}
          />
        </div>

        <span>{category.name}</span>
      </div>
    ))}
  </div>
);

export default CategoriesBar;
