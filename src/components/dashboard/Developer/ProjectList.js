import React, { useEffect } from "react";
import DevProject from "./DevProjectList/DevProject";
import styled from "styled-components";
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
const ProjectList = props => {
  const getRandomInt = () => {
    return Math.round(Math.random() * 2);
  };

  const [dashboard, searchProjectPage, { pathname }] = [
    "/dev/dashboard",
    "/dev/find/projects",
    props.history.location,
    props
  ];
const projectList = [];
  // const validProjectList = projectList.length || projectList.length > 0;
  return (
    <ProjectListContainer>
      {pathname === dashboard &&
        projectList.map(project => {
          return <DevProject color={getRandomInt()} {...project} />;
        })}
      {pathname === searchProjectPage && (
        <div className="find-new-proj-projectlist-container">
          {
            projectList.map(project => {
              return <NewProjects {...project} />;
            })}
        </div>
      )}
    </ProjectListContainer>
  );
};

const mapStateToProps = (state, props) => {
  // const { pathname } = props.history.location;
  // console.log(state);
  // // need a pathname mapped to state
  // if (state.projectList === undefined) {
  //   return {
  //     projectList: []
  //   };
  // } else if (
  //   state.projectList.length > 2 &&
  //   pathname === "/dev/find/projects"
  // ) {
  //   return { projectList: state.projectList.splice(0, 2) };
  // } else {
  //   return { projectList: state.projectList };
  // }
};
// export default connect(
//   mapStateToProps,
//   {}
// )(ProjectList);
export default ProjectList;
