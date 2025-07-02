import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ProductCarousel from './components/ProductCarousel';
import ProductModal from './components/ProductModal';
import type { Product } from './types/Product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar produtos');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError('Erro ao carregar produtos.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">

        {/* <CategoryTabs selected={selectedCategory} onSelect={setSelectedCategory} /> */}

        {isLoading && <p>Carregando produtos...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <ProductCarousel products={products} onProductClick={handleProductClick} />
        )}

        {isModalOpen && selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
