import React from 'react';

const Cart = () => {
  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {/* Add cart items here */}
      <div className="cart-item">
        <h2>Product 1</h2>
        <p>$10</p>
        <button>Remove from Cart</button>
      </div>
    </div>
  );
};

export default Cart;

