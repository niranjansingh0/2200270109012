import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.productName}</Typography>
        <Typography variant="subtitle1">{product.company}</Typography>
        <Typography variant="subtitle1">{product.category}</Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Typography variant="body2">Rating: {product.rating}</Typography>
        <Typography variant="body2">Discount: {product.discount}%</Typography>
        <Typography variant="body2">Availability: {product.availability}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
