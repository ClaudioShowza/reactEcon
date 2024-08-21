import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  color: #D1D5DB;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
    color: #F3F4F6;
  }
`;

const Navbar = () => (
  <Nav>
    <NavLink href="#home">Home</NavLink>
    <NavLink href="#products">Produtos</NavLink>
    <NavLink href="#about">Sobre</NavLink>
    <NavLink href="#contact">Contato</NavLink>
  </Nav>
);

export default Navbar;
