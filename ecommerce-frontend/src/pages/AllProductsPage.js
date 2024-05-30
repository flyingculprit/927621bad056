// src/pages/AllProductsPage.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const AllProductsPage = () => {
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Top Products</h1>
      <div className="mb-4">
        <label>
          Company:
          <select value={company} onChange={e => setCompany(e.target.value)} className="ml-2 p-1 border">
            <option value="AMZ">Amazon</option>
            <option value="FLP">Flipkart</option>
            <option value="SUP">SuperMart</option>
            <option value="MYN">Myntra</option>
            <option value="AZO">AzoMart</option>
          </select>
        </label>
        <label className="ml-4">
          Category:
          <select value={category} onChange={e => setCategory(e.target.value)} className="ml-2 p-1 border">
            <option value="Laptop">Laptop</option>
            <option value="Phone">Phone</option>
            <option value="TV">TV</option>
            <option value="Earphone">Earphone</option>
            <option value="Tablet">Tablet</option>
          </select>
        </label>
      </div>
      <ProductList company={company} category={category} />
    </div>
  );
};

export default AllProductsPage;
