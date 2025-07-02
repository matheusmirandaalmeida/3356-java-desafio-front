import styles from './styles.module.scss';

const categories = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"];

interface Props {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryTabs({ selected, onSelect }: Props) {
  return (
    <div className={styles.tabs}>
      {categories.map(category => (
        <button
          key={category}
          className={`${styles.tab} ${selected === category ? styles.active : ''}`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
