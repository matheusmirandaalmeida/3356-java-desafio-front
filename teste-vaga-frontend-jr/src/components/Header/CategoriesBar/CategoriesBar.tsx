import styles from './styles.module.scss';

const CategoriesBar = () => (
  <div className={styles.categoriesBar}>
    {['Tecnologia', 'Supermercado', 'Bebidas', 'Ferramentas'].map((category) => (
      <span key={category} className={styles.categoryItem}>{category}</span>
    ))}
  </div>
);

export default CategoriesBar;