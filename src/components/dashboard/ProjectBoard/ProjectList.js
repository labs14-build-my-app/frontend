import React, { Component } from "react";
import Project from "./Project";
import styled from "styled-components";
const List = styled.div`

`;
export default class ProjectList extends Component {
  render() {
console.log("projectlist")
    
    return (
      <div>
        <h1>projectz</h1>
        <ul>
          <Project />
          <Project />
          <Project />
        </ul>
      </div>
    );
  }
}


