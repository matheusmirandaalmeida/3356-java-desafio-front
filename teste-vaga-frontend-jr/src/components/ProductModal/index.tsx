import type { Product } from '../../types/Product';
import styles from './styles.module.scss';
import { useState } from 'react';

interface Props {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>

        <div className={styles.content}>
          <img src={product.photo} alt={product.productName} />

          <div className={styles.details}>
            <h2>{product.productName}</h2>
            <strong>R$ {product.price.toFixed(2)}</strong>
            <p>{product.descriptionShort}</p>
            <a href="#">Veja mais detalhes do produto &gt;</a>

            <div className={styles.actions}>
              <div className={styles.quantity}>
                <button onClick={handleDecrease}>–</button>
                <span>{quantity.toString().padStart(2, '0')}</span>
                <button onClick={handleIncrease}>+</button>
              </div>

              <button className={styles.buy}>COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
