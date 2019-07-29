import React, { Component } from "react";
import Project from "./Project";
import styled from "styled-components";
const List = styled.div`
background: red;
`;
export default class ProjectList extends Component {
  render() {

    
    return (
      <List>
      <h1>projectz</h1>
        <ul>
          <Project />
          <Project />
          <Project />
        </ul>
      </List>
    );
  }
}

export default ProjectList;
