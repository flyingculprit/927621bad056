// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={`https://via.placeholder.com/150?text=${product.productName}`} alt={product.productName} className="mb-4 w-full" />
      <h2 className="text-lg font-semibold">{product.productName}</h2>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductCard;
