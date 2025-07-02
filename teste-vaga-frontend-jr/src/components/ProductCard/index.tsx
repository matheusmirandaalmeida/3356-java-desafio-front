import type { Product } from "../../types/Product";
import styles from "./styles.module.scss";

interface Props {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: Props) {
  const oldPrice = (product.price * 1.1).toFixed(2);
  const parcelas = 2;
  const valorParcela = (product.price / parcelas).toFixed(2);

  return (
    <div className={styles.card} onClick={onClick}>
      <img src={product.photo} alt={product.productName} />

      <div className={styles.info}>
        <p className={styles.description}>{product.descriptionShort}</p>
        <p className={styles.oldPrice}>R$ {oldPrice}</p>
        <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
        <p className={styles.installments}>
          ou {parcelas}x de R$ {valorParcela} sem juros
        </p>
        <p className={styles.frete}>Frete grátis</p>
      </div>

      <button className={styles.buyButton}>COMPRAR</button>
    </div>
  );
}
