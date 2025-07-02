// src/components/ProductCarousel/index.tsx
import { useState } from "react";
import type { Product } from "../../types/Product";
import styles from "./styles.module.scss";
import ProductCard from "../ProductCard";

interface Props {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductCarousel = ({ products, onProductClick }: Props) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.title}>Produtos relacionados</h2>

      <div className={styles.carouselWrapper}>
        <button className={styles.arrowLeft} onClick={handlePrev}>
          &#8249;
        </button>

        <div className={styles.carousel}>
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>

        <button className={styles.arrowRight} onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
