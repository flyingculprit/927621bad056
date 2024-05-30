// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../services/api';

const ProductList = ({ company, category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(company, category);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [company, category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.productName + product.price} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
