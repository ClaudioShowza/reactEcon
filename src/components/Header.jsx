import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const HeaderContainer = styled.header`
  background-color: #1F2937;
  padding: 20px 40px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 2px;
  color: #F3F4F6;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>E-Conn Tech</Logo>
    <Navbar />
  </HeaderContainer>
);

export default Header;
