import React, { Component } from "react";
import styled from "styled-components";
const ProjectStyle = styled.li`
.proj-head{
  display: flex;
  margin-bottom: 1.25em;
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
      </div>
        <p> project description</p>
      </ProjectStyle>
    );
  }
}
