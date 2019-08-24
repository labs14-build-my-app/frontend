import React, { useEffect, useState } from "react";
import DevProject from "./DevProjectList/DevProject";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NewProjects from "./FindProjects/NewProjects";
import { fetchSelfProjects, fetchAllProjects } from "../../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

  console.group("ProjectList -- Rerender");
  // console.log(pathname, pathname.current);

  const [dashboard, searchProjectPage] = [
    "/dev/dashboard",
    "/dev/find/projects"
  ];
  const { devProjectList, searchProjectList } = useSelector(s => s);

  const validDevProjectList = devProjectList ? devProjectList.length : 0;

  // devProjectList.length !== null || devProjectList.length > 0;

  console.log(validDevProjectList);

  const validSearchProjectList = searchProjectList
    ? searchProjectList.length
    : 0;
  // searchProjectList.length !== null || searchProjectList.length > 0;

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
      {validDevProjectList && pathname[0] === dashboard && (
        <div className="dev-proj-projectlist-container">
          {devProjectList.map(project => {
            console.log(project);
            return (
              <Link
              // name, ownerName, description, id 
                to={{
                  pathname:`/dev/find/projects/${project._id}`,
                  state: {
                    name: project.name,
                    ownerName: project.ownerName,
                    description: project.description,
                    id: project._id
                  }
                }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <DevProject key={project._id} {...project} />{" "}
              </Link>
            );
          })}
        </div>
      )}
      {validSearchProjectList && pathname[0] === searchProjectPage && (
        <div className="find-new-proj-projectlist-container">
          {searchProjectList.map((project, i) => {
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
    devProjectList: state.devProjectList,
    searchProjectList: state.searchProjectList
  };
};
export default connect(
  mapStateToProps,
  { fetchSelfProjects, fetchAllProjects }
)(ProjectList);
