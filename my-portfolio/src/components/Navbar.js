import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 60px;
  background: url('https://img.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148434188.jpg?t=st=1723984373~exp=1723987973~hmac=cc053ce19144c006ec9742d32329523027b8c1963863a3f07baf1ed5b72a3385&w=996')no-repeat center center/cover;
  color: yellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const NavItem = styled.a`
  margin: 0 10px;
  color: yellow;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div><h1><a href="/"><img src="logo.png" height="40px"></img> </a>Ashish Mishra | Web developer</h1></div>
      <div>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#techstack">TechStack</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#resume">Resume</NavItem>
        <NavItem  href="#contact">Contact</NavItem>
      </div>
    </Nav>
  );
};

export default Navbar;
