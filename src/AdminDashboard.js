
import React, { useState } from 'react';

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });
  const [image, setImage] = useState(null);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProductData = {
      name: newProduct.name,
      price: newProduct.price,
      image: image,
    };
    setProducts([...products, newProductData]);
    setNewProduct({
      name: '',
      price: '',
      image: '',
    });
    setImage(null);
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((product, i) => i !== index));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Product Name:
          <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
        </label>
        <label>
          Image URL:
          <input type="file" name="image" onChange={handleImageChange} />
        </label>
        <button type="submit">Add Product</button>
      </form>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={URL.createObjectURL(product.image)} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;