import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1F2937;
  color: white;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftContent = styled.div`
  display: flex;
  gap: 20px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Link = styled.a`
  color: #9CA3AF;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #F3F4F6;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <LeftContent>
      <Link href="#privacy">Política de Privacidade</Link>
      <Link href="#terms">Termos de Uso</Link>
      <Link href="#contact">Contato</Link>
    </LeftContent>
    <RightContent>
      <div>© 2024 E-Conn. Todos os direitos reservados.</div>
      <SocialIcons>
        <Link href="https://facebook.com"><img src="/icons/facebook.svg" alt="Facebook" /></Link>
        <Link href="https://twitter.com"><img src="/icons/twitter.svg" alt="Twitter" /></Link>
        <Link href="https://instagram.com"><img src="/icons/instagram.svg" alt="Instagram" /></Link>
      </SocialIcons>
    </RightContent>
  </FooterContainer>
);

export default Footer;
