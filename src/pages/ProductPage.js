import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <div>
      {product ? <ProductDetails product={product} /> : <p>Product not found</p>}
    </div>
  );
};

export default ProductPage;
