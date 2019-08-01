import React, { Component } from "react";
import Project from "./Project";
import styled from "styled-components";
import { findProjects } from "../../../actions/index";
import { connect } from "react-redux";
const ProjectListContainer = styled.ul`
  max-width: 800px;
  margin: 0 2.5em;
`;

class ProjectList extends Component {
  getRandomInt = () => {
    return Math.round(Math.random() * 2);
  };
  findProjects = (e)=> {
    e.preventDefault()
    console.log("hello");
    this.props.findProjects();
  };
  render() {
    console.log(this.state);
    console.log(this.props);

    return (
      <ProjectListContainer >
       <button style={{width: "200px"}} type="submit" disabled={false} onClick={this.findProjects}>find projects</button>
        {this.props.projectList.map(project => {
          return <Project color={this.getRandomInt()} props={project} />;
        })}
       
      </ProjectListContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    projectList: state.projectList
  };
};
export default connect(
  mapStateToProps,
  { findProjects }
)(ProjectList);
