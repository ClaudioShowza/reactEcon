import React from 'react';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 20px;
`;

const CategoryButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const Categories = ({ onSelectCategory }) => (
  <CategoriesContainer>
    <CategoryButton onClick={() => onSelectCategory('Placa de Vídeo')}>Placas de Vídeo</CategoryButton>
    <CategoryButton onClick={() => onSelectCategory('Processador')}>Processadores</CategoryButton>
    <CategoryButton onClick={() => onSelectCategory('Periférico')}>Periféricos</CategoryButton>
    <CategoryButton onClick={() => onSelectCategory('Monitor')}>Monitores</CategoryButton>
  </CategoriesContainer>
);

export default Categories;
