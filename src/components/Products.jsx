import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Description from './Description';
import Card from './Card';

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Products = ({ products }) => (
  <>
    <Title>Seja bem-vindo!</Title>
    <Description>Aqui na <strong>E-Conn Tech</strong>, você tem a melhor variedade de produtos tecnológicos do mercado!</Description>
    <ProductsWrapper>
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </ProductsWrapper>
  </>
);

export default Products;
