import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/api';
import ProductList from '../components/ProductList';
import { TextField, Button } from '@mui/material';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    fetchProducts();
  }, [company, category, top, minPrice, maxPrice]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts(company, category, top, minPrice, maxPrice);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>All Products</h1>
      <div>
        <TextField label="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
        <TextField label="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <TextField label="Top N" value={top} onChange={(e) => setTop(e.target.value)} />
        <TextField label="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <TextField label="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        <Button onClick={fetchProducts}>Fetch Products</Button>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;
