import React from 'react';
import styled from 'styled-components';

const TechStackSection = styled.section`
  padding: 60px 20px;
  background: url('https://img.freepik.com/free-vector/gradient-black-background-with-golden-textures_23-2149154118.jpg?t=st=1723985845~exp=1723989445~hmac=1bbd258139a3cc3f886f3e92ce0a12dd72c0e343282d6b150809328366ded44c&w=996')no-repeat center center/cover;
  text-align: center;
  color:white;
`;

const TechStackTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const TechIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TechIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
`;

const IconImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const TechStack = () => {
  
    const techs = [
        { name: 'HTML', icon: ('html.png') },
        { name: 'CSS', icon: ('css.png') },
        { name: 'JavaScript', icon: ('js.png') },
        { name: 'React', icon: ('react.png') },
        { name: 'Node.js', icon: ('node.png') },
        { name: 'MongoDB', icon: ('mongodb.png') },
    { name: 'Git', icon: 'git.png' },
    { name: 'Express', icon: 'express.png' },
    
  ];

  return (
    <TechStackSection id="techstack">
      <TechStackTitle>Tech Stack</TechStackTitle>
      <TechIcons>
        {techs.map((tech, index) => (
          <TechIcon key={index}>
            <IconImage src={tech.icon} alt={tech.name} />
            {tech.name}
          </TechIcon>
        ))}
      </TechIcons>
    </TechStackSection>
  );
};

export default TechStack;
