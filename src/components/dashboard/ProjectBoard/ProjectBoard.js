import React, { Component } from "react";
import ProjectIntroduction from "./ProjectIntroduction";
import ProjectList from "./ProjectList";
import styled from "styled-components";
import { transparentBackdrop } from "../cssVariables";
import FindProjects from "./FindProjects";
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
    const {pathname} = this.props.history.location;
    return (
      <ProjectBoardContainer>
        {/* render the dev dashboard with description of projects*/}
        {pathname === "/dev/dashboard" ? <ProjectIntroduction /> : pathname ==="/dev/find/projects" && <FindProjects /> }
        <ProjectList {...this.props} pathname={pathname} />  
      </ProjectBoardContainer>
    );
  }
}


export default ProjectBoard;
