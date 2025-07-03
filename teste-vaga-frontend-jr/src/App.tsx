import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ProductModal from './components/ProductModal';
import type { Product } from './types/Product';
import PartnerBanner from './components/Partners/PartnerBanner';
import BrandLogos from './components/Brands/BrandLogos';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import RelatedProducts from './components/ProdutosRelacionados/RelatedProducts';
import FooterInfo from './components/Footer/FooterInfo/FooterInfo';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("CELULAR");

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
        <RelatedProducts
          products={products}
          isLoading={isLoading}
          error={error}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onProductClick={handleProductClick}
        />

        <PartnerBanner />

        <RelatedProducts
          products={products}
          isLoading={isLoading}
          error={error}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onProductClick={handleProductClick}
        />

        <PartnerBanner />
        <BrandLogos />

        <RelatedProducts
          products={products}
          isLoading={isLoading}
          error={error}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onProductClick={handleProductClick}
        />

        {isModalOpen && selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setIsModalOpen(false)}
          />
        )}

        <Newsletter />

        <FooterInfo />
      </main>
    </div>
  );
}

export default App;
