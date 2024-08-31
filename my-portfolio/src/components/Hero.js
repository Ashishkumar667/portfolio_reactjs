import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactTyped as Typed } from 'react-typed';


const HeroSection = styled.section`
  height: 100vh;
  background: url('https://img.freepik.com/free-vector/paper-style-dynamic-lines-background_23-2149008629.jpg?t=st=1723983274~exp=1723986874~hmac=41c43228b9f8a4092954463f2574da103ddcc0a5402633491cd0e58d8170c1e8&w=996') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  width:35px;
  // margin-right:30px;
  white-space: nowrap;
  display:flex;
  // justify-content:right;
  text-shadow:2px 3px black;
  color:yellowgreen;
`;
const fadeIn = keyframes`
  0%{
  border-radius:blue;
  transform:translate(0,0px);
  box-shadow:10px 10px 100px 50px blue;
  }
  25%{
  border-color:rgb(239,244,11);
  box-shadow:10px 10px 100px 50px rgb(239,244,11);
  }
  50%{
  border-color:rgb(12,12,199);
  transform:translate(0,10px);
   box-shadow:10px 10px 100px 50px rgb(12,12,199);
  }
   75%{
   border-color:rgb(130,217,160);
  box-shadow:10px 10px 100px 50px rgb(130,217,160);
   }
  100%{
  border-color:rgb(50,55,205);
  transform:translate(0,-10px);
   box-shadow:10px 10px 100px 50px rgb(50,55,205);
  }
`;


const HeroImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin-left: 400px;
  object-fit: cover;
  animation: ${fadeIn} 2s ease-in-out;
  animation-iteration-count:infinite;
`;


const HeroSubtitle = styled.p`
  font-size: 2rem;
  width:5px;
  margin-right:120px;
  color:yellow;
  margin-top: 160px;
  text-shadow:2px 3px black;
  white-space: nowrap;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle id="title">Hi, <br></br>
          I'm Ashish Mishra </HeroTitle>
        <HeroSubtitle>
          A..
         <Typed
              strings={['Software Developer', 'MERN stack Developer','DSA Enthusiast']}
              typeSpeed={80}
              backSpeed={60}
              loop
            />
        </HeroSubtitle>
        <HeroImage src="ashish.jpg" alt="Profile" />
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
