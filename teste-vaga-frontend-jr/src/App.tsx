import { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.scss';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Erro ao carregar produtos:', error));
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <h2 className="section-title">Nossos Produtos</h2>
        
        <div className="products-grid">
          {products.map(product => (
            <article 
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="price">R$ {product.price.toFixed(2)}</span>
                {product.category && <span className="category">{product.category}</span>}
              </div>
            </article>
          ))}
        </div>
      </main>

      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <div className="modal-body">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
              <div className="product-details">
                <h2>{selectedProduct.name}</h2>
                <span className="price">R$ {selectedProduct.price.toFixed(2)}</span>
                <p className="description">{selectedProduct.description}</p>
                <button className="buy-button">Adicionar ao Carrinho</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;