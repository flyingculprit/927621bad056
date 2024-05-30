// src/pages/ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  return (
    <div className="container mx-auto p-4">
      {product ? <ProductCard product={product} /> : <p>Product not found</p>}
    </div>
  );
};

export default ProductDetailPage;
