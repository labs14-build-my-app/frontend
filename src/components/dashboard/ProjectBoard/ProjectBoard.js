import React, { Component } from "react";
import ProjectIntroduction from "./ProjectIntroduction"
import ProjectList from "./ProjectList";
import styled from "styled-components";
const maxWidth = 900;

export class ProjectBoard extends Component {
  

  render() {
  const ProjectBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${maxWidth}px;
  margin: 4em 35em;
  padding: 2.5em;
  box-shadow: 5px 5px 8px 0px rgba(255,255,255,0.16);
  border-radius: 10px;
border: none;
  position: relative;
 ::before{
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: white;
  filter: blur(0px) brightness(150%) opacity(25%);
  border-radius: 10px;
 }
 .background-projects{
  position: relative;
 }
 


}

  }
${'' /* .background-projects{
    position: absolute;
    padding: 2.5em;
    width: 100%;
    height: 100%;
    background: white;
    background-size: cover;
    content: ' ';
    opacity: 0.4;
} */}
} 
`  
    return (

      <ProjectBoardContainer>
          <div className="background-projects">
          <ProjectIntroduction />
          <ProjectList />
          </div>
      </ProjectBoardContainer>
   
    );
  }
}

export default ProjectBoard;
