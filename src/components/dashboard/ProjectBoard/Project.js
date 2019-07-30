import React, { Component } from "react";
import styled from "styled-components";
import { electricViolet } from "../cssVariables";
const ProjectStyle = styled.li`
margin-bottom: 1.25em;
.proj-head{
  display: flex;

  position: relative;
  .progress-circle{
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;
    background: ${electricViolet};
    border-radius: 50%;
    
  }
}
`
export default class Project extends Component {
  render() {
    return (
      <ProjectStyle>
      <div className="proj-head">
        <h1>face of gurl</h1>
        <div>
        <h3>Project Title</h3>
        <h4>project owner name</h4>
        </div>
        <h1 className="progress-circle"></h1>
      </div>
        <p> project description</p>
      </ProjectStyle>
    );
  }
}
