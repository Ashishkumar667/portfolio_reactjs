import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  #email{
  margin-right:75rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const FooterLink = styled.a`
  color: #fff;
  margin: 0 5px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
#github{
color:grey;
}
#twitter{
color:	#1DA1F2;
}
#linkedin{
color:#0077B5}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 build by Ashish Mishra. All Rights Reserved.</FooterText>

      <FooterText id="footerjs">
        Follow me on 
        <FooterLink href="https://github.com/Ashishkumar667" target="_blank" rel="noopener noreferrer">
          GitHub <i id="github" class="fa-brands fa-github"></i>
        </FooterLink>
        <FooterLink href="https://linkedin.com/in/ashish-mishra-303312305/" target="_blank" rel="noopener noreferrer">
          LinkedIn <i id="linkedin"class="fa-brands fa-linkedin"></i>
        </FooterLink>
        <FooterLink href="/" target="_blank" rel="noopener noreferrer">
          Twitter <i id="twitter"class="fa-brands fa-twitter"></i>
        </FooterLink>
      </FooterText>
      <p id="email"><i class="fa-solid fa-envelope"></i> ashishkumarinfo6@gmail.com</p>
    </FooterContainer>
  );
};

export default Footer;
