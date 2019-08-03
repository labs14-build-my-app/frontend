import React, { Component } from "react";
import Project from "./Project";
import styled from "styled-components";
import { findProjects,findAvailableProjects } from "../../../actions/index";
import { connect } from "react-redux";
const ProjectListContainer = styled.ul`
  max-width: 800px;
  margin: 0 2.5em;
`;
//This component will call to the back end and get a list of projects that are requested by the user.
//If pathname === /dev/dashboard, list of projects the dev is on.
//if pathname === /dev/find/projects, return list of projects posted by entreprenuers to be picked up by the dev.
class ProjectList extends Component {
  componentDidMount(){
    this.props.findProjects();
  }
  componentDidUpdate(){
    console.log("update ran")
    if( this.props.pathname ==="/dev/dashboard")
    {
      this.props.findProjects();
    }
    if(this.props.pathname==="/dev/find/projects"){
      this.props.findAvailableProjects();
    }
    
  }
  getRandomInt = () => {
    return Math.round(Math.random() * 2);
  };
  findProjects = (e)=> {
    e.preventDefault()
    this.props.findProjects();
  };

  render() {
    const {projectList, pathname} = this.props;
    
    
    return (
      <ProjectListContainer >
       { (projectList.length) && projectList.map(project => {
          return <Project color={this.getRandomInt()} {...project} />
        })} 
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
  { findProjects, findAvailableProjects }
)(ProjectList);
