import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  return (
    <div className="product-page">
      <h1>Product {id}</h1>
      {/* Add product details here */}
      <p>Product details for product {id} will be displayed here.</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;

