import React, { Component } from "react";
import DevProject from "./DevProjectList/DevProject";
import styled from "styled-components";
import { findProjects, findAvailableProjects } from "../../../actions/";
import { connect } from "react-redux";
import NewProjects from "./FindProjects/NewProjects";

const ProjectListContainer = styled.ul`
  .find-new-proj-projectlist-container {
    display: flex;
    justify-content: space-between;
    padding: 5em 0em;
  }
`;
//This component will call to the back end and get a list of projects that are requested by the user.
//If pathname === /dev/dashboard, list of projects the dev is on.
//if pathname === /dev/find/projects, return list of projects posted by entreprenuers to be picked up by the dev.
class ProjectList extends Component {
  componentDidMount() {
    this.props.findProjects();
  }

  componentDidUpdate() {
    console.log("update ran");
    if (this.props.pathname === "/dev/dashboard") {
      this.props.findProjects();
    }
    if (this.props.pathname === "/dev/find/projects") {
      this.props.findAvailableProjects();
    }
  }

  getRandomInt = () => {
    return Math.round(Math.random() * 2);
  };

  findProjects = e => {
    e.preventDefault();
    this.props.findProjects();
  };

  render() {
    const [dashboard, findNewProjects, { pathname }, { projectList }] = [
      "/dev/dashboard",
      "/dev/find/projects",
      this.props.history.location,
      this.props
    ];
    //render  .find-new-proj-container when on find projects page
    return (
      <ProjectListContainer>
        {pathname === dashboard &&
          projectList.length &&
          projectList.map(project => {
            return <DevProject color={this.getRandomInt()} {...project} />;
          })}
        {pathname === findNewProjects && (
          <div className="find-new-proj-projectlist-container">
            {projectList.length &&
              projectList.map(project => {
                return <NewProjects {...project} />;
              })}
          </div>
        )}
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
