import './App.css';
import { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';

function App() {
  const [animate, setAnimate] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'SUPPORT MURAL MOBILE HOME DESIGN',
      price: '35,000 د.ت',
      image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-e3XG1aH7PG3rOvRf42WOMjQJ.png',
    },
    {
      id: 2,
      name: 'SUPPORT MURAL FIXE POUR TV 26',
      price: '22,000 د.ت',
      image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-PlEa8IAJtn239cYIFqVsTTeT.png',
    },
    {
      id: 3,
      name: 'ÉCOUTEURS BLUETOOTH INKAX T03',
      price: '89,000 د.ت',
      image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-Ytzyz2GpCU8FzKDe17ITFp70.png',
    },
    {
      id: 4,
      name: 'ÉCOUTEURS BLUETOOTH INKAX T02',
      price: '69,000 د.ت',
      image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-Se6uDDoCZAQ33SwBidjB7s3x.png',
    },
  ]);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <AdminDashboard onAddProduct={handleAddProduct} />
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            TUNIJAD SHOP
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Rechercher des produits" />
            <button>
              <i className="fas fa-search" />
            </button>
          </div>
          <div className="icons">
            <i className="fas fa-heart" />
            <i className="fas fa-shopping-cart" />
            <i className="fas fa-user" />
          </div>
        </header>

        {/* Main Content */}
        <main className={`main-content ${animate ? 'animate-drop-down active' : 'animate-drop-down'}`}>
          <h1>TUNIJAD SHOP</h1>
          <h2>Les Bonnes Affaires</h2>
          <div className="products">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2022 TUNIJAD SHOP</p>
        </footer>
      </div>
    </div>
  );
}

export default App;