import React, { Component } from "react";
import Project from "./Project";
import styled from 'styled-components'
const ProjectListContainer = styled.ul`
max-width: 800px;
`
export default class ProjectList extends Component {
  render() { 
    return (
        <ProjectListContainer>
          <Project />
          <Project />
          <Project />
        </ProjectListContainer>
    );
  }
}


