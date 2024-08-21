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
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante que o botão fique no fim do card */
  flex-grow: 1;

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
  font-weight: bold;
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const DiscountLabel = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #e63946;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9em;
`;

const Card = ({ product, discount }) => (
  <CardWrapper>
    {discount && <DiscountLabel>{discount}% OFF</DiscountLabel>}
    <Image src={product.imageUrl} alt={product.title} />
    <ProductTitle>{product.title}</ProductTitle>
    <ProductPrice>{product.price}</ProductPrice>
    <BuyButton>Comprar</BuyButton>
  </CardWrapper>
);
export default Card;
