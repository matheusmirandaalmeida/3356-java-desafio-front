import CategoryTabs from '../CategoryTabs';
import ProductCarousel from '../ProductCarousel';
import type { Product } from '../../types/Product';

interface RelatedProductsProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onProductClick: (product: Product) => void;
}

export default function RelatedProducts({
  products,
  isLoading,
  error,
  selectedCategory,
  onCategoryChange,
  onProductClick
}: RelatedProductsProps) {
  return (
    <>
      <h2 className="related-title">Produtos relacionados</h2>
      <CategoryTabs selected={selectedCategory} onSelect={onCategoryChange} />
      {isLoading && <p>Carregando produtos...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <ProductCarousel products={products} onProductClick={onProductClick} />
      )}
    </>
  );
}
