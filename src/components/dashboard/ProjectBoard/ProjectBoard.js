import React, { Component } from "react";
import ProjectIntroduction from "./ProjectIntroduction"
import ProjectList from "./ProjectList";
import styled from "styled-components";
import { transparentBackdrop } from "../cssVariables";
const maxWidth = 900;

export class ProjectBoard extends Component {
  

  render() {
  const ProjectBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${maxWidth}px;
  margin: 4em 2.5em 0 2.5em;
  padding: 2.5em;
  box-shadow: 5px 5px 8px 0px rgba(255,255,255,0.16);
  border-radius: 10px;
  border: none;
  
  ${transparentBackdrop}
}

  }
} 
`  
    return (

      <ProjectBoardContainer>
        
          <ProjectIntroduction />
          <ProjectList />

      </ProjectBoardContainer>
   
    );
  }
}

export default ProjectBoard;
