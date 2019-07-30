import React, { Component } from "react";
import ProjectIntroduction from "./ProjectIntroduction"
import ProjectList from "./ProjectList";
import styled from "styled-components";
const maxWidth = 900;

export class ProjectBoard extends Component {
  state = {
    backgroundHeight: null
  }
  componentDidMount(){
    const container = document.querySelector(".background-projects").parentElement;
    const height = window.getComputedStyle(container, null).getPropertyValue("height");
    const heightNum = parseInt(height.split('px')[0]) + 50;
    this.setState({
      backgroundHeight: `${heightNum/2}px`
    })
  }

 
  render() {
  const ProjectBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${maxWidth}px;
  margin: 4em 35em;
  box-shadow: 5px 5px 8px rgba(255,255,255,.16);
  position: relative;
  backdrop-filter: blur(5px);
  overflow: hidden;
.background-projects{
    position: absolute;
    padding: ${true && this.state.backgroundHeight} ${maxWidth/2}px;
    -webkit-filter: blur(7px) brightness(95%) opacity(25%);
    filter: blur(7px) brightness(95%) opacity(25%);
    background: white;
    z-index: -1;
  
}
}
`  
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
