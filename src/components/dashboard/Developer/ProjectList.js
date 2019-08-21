import React, { useEffect, useState } from "react";
import DevProject from "./DevProjectList/DevProject";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NewProjects from "./FindProjects/NewProjects";
import { fetchSelfProjects, fetchAllProjects } from "../../../redux/actions";
import { connect } from "react-redux";

const ProjectListContainer = styled.ul`
  .find-new-proj-projectlist-container {
    /* display: flex;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-rows: minmax(100px, 342px); */
    grid-gap: 30px;
    padding: 2.5em 0 0 0;
  }

  /* dev-project-list styles */

  .dev-proj-projectlist-container {
    padding: 1.25em 2.5em 6.625em 7.4em;
  }
`;

const ProjectList = ({ fetchSelfProjects, fetchAllProjects, history }) => {
  const pathname = useState(history.location.pathname);
  const getRandomInt = () => {
    return Math.round(Math.random() * 2);
  };

  // const getColorForProjectStatus = status => {
  //   switch (status) {
  //     case "searching":
  //       return getRandomInt();

  //     case "review":
  //       return "#E2E0FF";

  //     default:
  //       return getRandomInt();
  //   }
  // };

  console.group("ProjectList -- Rerender");
  // console.log(pathname, pathname.current);

  const [dashboard, searchProjectPage] = [
    "/dev/dashboard",
    "/dev/find/projects"
  ];
  const { projectList } = useSelector(s => s);

  const validProjectList =
    projectList.length !== null || projectList.length > 0;

  useEffect(() => {
    if (pathname[0] === dashboard) {
      fetchSelfProjects();
    }

    if (pathname[0] === searchProjectPage) {
      fetchAllProjects();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname[0]]);

  console.groupEnd();
  return (
    <ProjectListContainer>
      {validProjectList && pathname[0] === dashboard && (
        <div className="dev-proj-projectlist-container">
          {projectList.map(project => {
            console.log(project);
            return <DevProject key={project._id} {...project} />;
          })}
        </div>
      )}
      {validProjectList && pathname[0] === searchProjectPage && (
        <div className="find-new-proj-projectlist-container">
          {projectList.map((project, i) => {
            return (
              <NewProjects
                {...project}
                key={project._id}
                number={i}
                id={project._id}
              />
            );
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
