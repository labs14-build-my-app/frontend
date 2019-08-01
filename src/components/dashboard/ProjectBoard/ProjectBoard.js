import React, { Component } from "react";
import ProjectIntroduction from "./ProjectIntroduction";
import ProjectList from "./ProjectList";
import styled from "styled-components";
import { transparentBackdrop } from "../cssVariables";
const maxWidth = 900;
const ProjectBoardContainer = styled.div`
display: flex;
flex-direction: column;
max-width: ${maxWidth}px;
margin: 4em 2.5em 0 2.5em;
padding: 2.5em;

border-radius: 10px;
border: none;

${transparentBackdrop}

`;
export class ProjectBoard extends Component {
  render() {
    
    return (
      <ProjectBoardContainer>
      
        <ProjectIntroduction />
        <ProjectList />
      </ProjectBoardContainer>
    );
  }
}

export default ProjectBoard;
