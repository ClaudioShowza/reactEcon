import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #343a40;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      E-Conn
    </HeaderContainer>
  );
}

export default Header;
