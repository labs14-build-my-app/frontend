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
  componentDidMount(){
    this.props.findProjects();
  }
  getRandomInt = () => {
    return Math.round(Math.random() * 2);
  };
  findProjects = (e)=> {
    e.preventDefault()
    this.props.findProjects();
  };

  render() {
    const {projectList} = this.props;
    return (
      <ProjectListContainer >
       { (projectList.length) && projectList.map(project => {
          return <Project color={this.getRandomInt()} {...project} />
        })} 
        {/* <Project color={this.getRandomInt()} toggleFirst={this.toggleFirst} />
        <Project color={this.getRandomInt()} />
        <Project color={this.getRandomInt()} /> */}
        
       
      </ProjectListContainer>
    );
  }
}

const mapStateToProps = state => {

  return {
    projectList: state.projectList
  };
};
export default connect(
  mapStateToProps,
  { findProjects }
)(ProjectList);
