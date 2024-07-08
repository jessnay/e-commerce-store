import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '../ProductItens/Product1';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to the E-commerce Store</h1>
        <div className="product-list">
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

