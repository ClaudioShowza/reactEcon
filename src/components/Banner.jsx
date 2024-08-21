import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  background-image: url('http://site.awto.com.br/wp-content/uploads/2024/08/DALL·E-2024-08-21-20.06.50-A-sleek-and-modern-banner-for-an-e-commerce-store-selling-technology-products.-The-banner-is-1200x300-pixels-in-size-with-a-cool-blue-color-scheme.-I.webp'); /* Coloque aqui a URL de uma imagem promocional */
  background-position: center;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const BannerText = styled.h1`
  font-size: 2.5em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
`;

const Banner = () => (
  <BannerWrapper>
    <BannerText>Promoção de Inverno - Até 50% OFF!</BannerText>
  </BannerWrapper>
);

export default Banner;
