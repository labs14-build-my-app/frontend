import React, { Component } from "react";
import Project from "./Project";
import styled from "styled-components";
const ProjectListContainer = styled.ul`
  max-width: 800px;
  margin: 0 2.5em;
`;
const getRandomInt = () => {
  return Math.round(Math.random() * 2);
};
export default class ProjectList extends Component {
  render() {
    return (
      <ProjectListContainer>
        <Project color={getRandomInt()} />
        <Project color={getRandomInt()} />
        <Project color={getRandomInt()} />
      </ProjectListContainer>
    );
  }
}
