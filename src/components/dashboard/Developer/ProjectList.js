import React, { useEffect, useState } from "react";
import DevProject from "./DevProjectList/DevProject";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NewProjects from "./FindProjects/NewProjects";
import { fetchSelfProjects, fetchAllProjects } from "../../../redux/actions";
import { connect } from "react-redux";

const ProjectListContainer = styled.ul`
  .find-new-proj-projectlist-container {
    display: flex;
    justify-content: space-between;
    padding: 5em 0em;
  }
`;

const ProjectList = ({ fetchSelfProjects, fetchAllProjects, history }) => {
  const pathname = useState(history.location.pathname);
  const getRandomInt = () => {
    return Math.round(Math.random() * 2);
  };
  console.group("PROJECTLIST");
  console.log(pathname, pathname.current);
  const [dashboard, searchProjectPage] = [
    "/dev/dashboard",
    "/dev/find/projects"
  ];
  const { projectList } = useSelector(s => s);

  const validProjectList =
    projectList.length !== null || projectList.length > 0;

  console.log(projectList);
  console.log(
    validProjectList && pathname[0] === searchProjectPage,
    "SEARCH PROJECTS"
  );
  useEffect(() => {
    if (pathname[0] === dashboard) {
      fetchSelfProjects();
    }

    if (pathname[0] === searchProjectPage) {
      fetchAllProjects();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname[0]]);
  console.log(validProjectList, "VALID PROJECT");
  console.log(
    pathname === dashboard,
    pathname === searchProjectPage,
    `pathname: ${pathname[0]}`
  );

  console.groupEnd();
  return (
    <ProjectListContainer>
      {validProjectList &&
        pathname[0] === dashboard &&
        projectList.map(project => {
          return (
            <DevProject key={project._id} color={getRandomInt()} {...project} />
          );
        })}
      {validProjectList && pathname[0] === searchProjectPage && (
        <div className="find-new-proj-projectlist-container">
          {projectList.map(project => {
            return <NewProjects {...project} key={project._id} />;
          })}
        </div>
      )}
    </ProjectListContainer>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    projectList: state.projectList
  };
};
export default connect(
  mapStateToProps,
  { fetchSelfProjects, fetchAllProjects }
)(ProjectList);
