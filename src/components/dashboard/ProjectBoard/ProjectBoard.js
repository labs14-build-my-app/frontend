import React, { Component } from "react";
import ProjectIntroduction from "./ProjectIntroduction"
import ProjectList from "./ProjectList";
import styled from "styled-components";
const maxWidth = 900
const ProjectBoardContainer = styled.div`
  display: flex;
flex-direction: column;
max-width: ${maxWidth}px;
margin: 4em 35em;
box-shadow: 5px 5px 8px rgba(255,255,255,.16);
position: relative;
backdrop-filter: blur(5px);
.background-projects{

    position: absolute;
    padding: ${maxWidth/2}px;
    -webkit-filter: blur(8px) brightness(95%) opacity(25%);
    filter: blur(8px) brightness(95%) opacity(25%);
    background: white;
    z-index: -1;
}
}
`
export class ProjectBoard extends Component {
 
  render() {
    return (
      <ProjectBoardContainer>
          <div className="background-projects"/>
          <ProjectIntroduction />
          <ProjectList />
          
      </ProjectBoardContainer>
    );
  }
}

export default ProjectBoard;
