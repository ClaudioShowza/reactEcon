import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Link = styled.a`
  color: #9CA3AF;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <Link href="#privacy">Política de Privacidade</Link>
      <Link href="#terms">Termos de Uso</Link>
      <Link href="#contact">Contato</Link>
    </FooterLinks>
    <SocialIcons>
      <Link href="https://facebook.com"><img src="/icons/facebook.svg" alt="Facebook" /></Link>
      <Link href="https://twitter.com"><img src="/icons/twitter.svg" alt="Twitter" /></Link>
      <Link href="https://instagram.com"><img src="/icons/instagram.svg" alt="Instagram" /></Link>
    </SocialIcons>
    <div>© 2024 E-Conn Tech. Todos os direitos reservados.</div>
  </FooterContainer>
);

export default Footer;
