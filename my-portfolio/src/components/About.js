import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 20px;
  background:url('https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149138436.jpg?t=st=1723984538~exp=1723988138~hmac=e0caf9ffa3a5224dc8147fe1436730c0393db54a7a13343d3ecaec3ff93b5e3e&w=996')no-repeat center center/cover;
  text-align: center;
  
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color:white;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: yellow;
  &:hover{
  color:yellowgreen;
  }
  .ashish{
  color:white;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          Hello! I'm Ashish Mishra a Software Web Developer with a deep love for creating elegant, efficient, and user-friendly web applications. With a strong foundation in modern web technologies, I specialize in building dynamic and responsive websites that provide seamless user experiences.
        </AboutText>
        <AboutText>
          I have experience in both front-end and back-end development, working with technologies like <b class="ashish">HTML, CSS, JavaScript, React,Express,Node.js ,MongoDB database and I have also deep interest in DSA (learning)</b>. I enjoy solving complex problems and constantly seek out new challenges to push the boundaries of what web development can achieve.
        </AboutText>
        <AboutText>
          Outside of coding, I love staying updated with the latest industry trends, exploring new technologies, and contributing to open-source projects. I'm always excited to collaborate with others who share a passion for technology and innovation.
        </AboutText>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
