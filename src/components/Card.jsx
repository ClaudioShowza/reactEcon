import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const CardWrapper = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 250px;
  margin: 20px;
  background-color: white;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProductTitle = styled.h2`
  font-size: 1.3em;
  color: #111827;
  margin: 15px 0;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #6B7280;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  color: #10B981;
  margin-top: 10px;
  font-weight: bold;
`;

const Card = ({ product }) => (
  <CardWrapper>
    <Image src={product.imageUrl} alt={product.title} />
    <ProductTitle>{product.title}</ProductTitle>
    <ProductDescription>{product.description}</ProductDescription>
    <ProductPrice>{product.price}</ProductPrice>
  </CardWrapper>
);

export default Card;
