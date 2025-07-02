import type { Product } from "../../types/Product";
import styles from "./styles.module.scss";

interface Props {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: Props) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>Xxxxxx</button>
        <img src={product.photo} alt={product.productName} />
        <h2>{product.productName}</h2>
        <p>{product.descriptionShort}</p>
        <strong>R$ {product.price.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default ProductModal;
