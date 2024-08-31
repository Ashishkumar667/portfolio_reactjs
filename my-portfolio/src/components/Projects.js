import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 60px 20px;
  background: url('https://img.freepik.com/free-vector/abstract-background-design-black_53876-62802.jpg?t=st=1723983675~exp=1723987275~hmac=78de69728ea943d31265b512a10535737855123ffcfaea5ca384837eb98d698b&w=1060')no-repeat center center/cover;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  color:white;
`;

const ProjectCard = styled.div`
  background: grey;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px purple;
  color:black;
  &:hover{
  background:#191C27;
  color:white;
  box-shadow: 10px 10px 10px yellow;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProjectTitle = styled.h3`
  margin: 15px 0;

`;

const ProjectDescription = styled.p`
  color: BLACK;
  &:hover{
  color:white;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>My Projects</h2>
      <ProjectGrid>
        <ProjectCard>
          <ProjectImage src="ti.png" alt="Project 1" />
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectDescription>I have built this game using JAVASCRIPT,HTML and CSS.(<a href="https://tictactoeashish.netlify.app/"target="__blank"><b>Live Link</b> </a>|| <a href="https://github.com/Ashishkumar667/Tic-Tac-Toe-Game"target="__blank"><b>Repo Link</b></a>)
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="c.png" alt="Project 2" />
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectDescription>I have built this game using JAVASCRIPT,HTML and CSS.(<a href="https://calculatoras.netlify.app/" target="__blank"><b>Live Link</b> </a>|| <a href="https://github.com/Ashishkumar667/Calculator"target="__blank"><b>Repo Link</b></a>).</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="loginto.png" alt="Project 2" />
          <ProjectTitle>Project 3</ProjectTitle>
          <ProjectDescription>This project is purely based on backend development .I have used NodeJS and ExpressJS.<b>(<a href="https://github.com/Ashishkumar667/login_signUp-form"target="__blank">Repo Link</a>)</b></ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="cal.png" alt="Project 2" />
          <ProjectTitle>Project 4</ProjectTitle>
          <ProjectDescription>About
          I have built this voice assistance named "CALVIN" using JAVASCRIPT,HTML and lil bit css.(<a href="https://calvinashishproject.netlify.app/" target="__blank"><b>Live Link</b> </a>|| <a href="https://github.com/Ashishkumar667/CALVIN_javascript"target="__blank"><b>Repo Link</b></a>)</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="p.png" alt="Project 2" />
          <ProjectTitle>Project 5</ProjectTitle>
          <ProjectDescription>This project is all about my portfolio and it is fully based on fullstack development.I have built this using Reacjs for frontend and Nodejs,Expressjs for backend.(<a href="https://ashishmishraportfolio.netlify.app/" target="__blank"><b>Live Link</b> </a>|| <a href="https://github.com/Ashishkumar667/PORTFOLIO_AK"target="__blank"><b>Repo Link</b></a>)</ProjectDescription>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
