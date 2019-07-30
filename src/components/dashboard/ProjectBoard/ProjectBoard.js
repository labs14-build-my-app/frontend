import React, { Component } from "react";
import ProjectIntroduction from "./ProjectIntroduction"
import ProjectList from "./ProjectList";
import styled from "styled-components";
const ProjectBoardContainer = styled.div`
  display: flex;
flex-direction: column;
max-width: 500px;
margin: 4em 35em;
box-shadow: 5px 5px 8px rgba(255,255,255,.16);
`
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
