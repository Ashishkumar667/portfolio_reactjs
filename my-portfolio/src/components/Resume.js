import React from 'react';
import styled from 'styled-components';

const ResumeSection = styled.section`
  padding: 60px 20px;
  background: url('https://img.freepik.com/free-vector/gradient-black-background-with-cubes_52683-76469.jpg?t=st=1723984486~exp=1723988086~hmac=9f76586ebc7ee714a5a0be5ec139e356ba40203d4c6f5f98e8295c0f437580cc&w=996')no-repeat center center/cover;
  text-align: center;
  color:Orange;
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin: 20px 10px;
  padding: 10px 20px;
  color: #fff;
  background: #555;
  border-radius: 5px;
  box-shadow:6px 6px 6px orange;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #333;
    color:grey;
    box-shadow:6px 6px 6px  #90462c;
  }
`;

const Resume = () => {
  return (
    <ResumeSection id="resume">
      <h2>Resume</h2>
      <p>You can download or view my resume using the links below:</p>
      <ResumeButton href="/resume.pdf" download="Ashish_Resume.pdf">
        Download Resume
      </ResumeButton>
      <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        View Resume
      </ResumeButton>
    </ResumeSection>
  );
};

export default Resume;
