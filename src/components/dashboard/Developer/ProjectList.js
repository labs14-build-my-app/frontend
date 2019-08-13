import React, { useEffect, useRef,useState } from "react";
import DevProject from "./DevProjectList/DevProject";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NewProjects from "./FindProjects/NewProjects";
import { fetchSelfProjects, fetchAllProjects } from "../../../redux/actions";
import {connect} from "react-redux"


const ProjectListContainer = styled.ul`
  .find-new-proj-projectlist-container {
    display: flex;
    justify-content: space-between;
    padding: 5em 0em;
  }
`;


const ProjectList = ({fetchSelfProjects, fetchAllProjects, history}) => {
  const pathname = useState(history.location.pathname)
  const getRandomInt = () => {
    return Math.round(Math.random() * 2);
  };
  console.group("PROJECTLIST")
  console.log(pathname, pathname.current)
  const [dashboard, searchProjectPage] = [
    "/dev/dashboard",
    "/dev/find/projects",
 
  ];


  const {projectList, projectsAlreadyCalled, allProjectsCalled} = useSelector(s=> s)
  console.log(projectList)

  useEffect(() => {
    if((pathname === dashboard && projectList.length === 0) || !projectsAlreadyCalled) fetchSelfProjects()

    if((pathname === searchProjectPage && projectList.lenght ===0) || !allProjectsCalled) fetchAllProjects() 

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[projectsAlreadyCalled,pathname.current])
  const validProjectList = projectList.length !== null ||  0 < projectList.length
  console.log(validProjectList, "VALID PROJECT")
  console.log(pathname === dashboard, pathname === searchProjectPage, `pathname: ${pathname[0]}`)
  console.groupEnd();
  return (
    <ProjectListContainer>
      { validProjectList && pathname[0] === dashboard &&
        projectList.map(project => {
          return <DevProject color={getRandomInt()} {...project} />;
        })}
      { validProjectList && pathname[0] === searchProjectPage && (
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

const mapStateToProps = state =>{
  console.log(state)
  return{
    projectList: state.projectList
  }
}
export default connect(mapStateToProps, {fetchSelfProjects, fetchAllProjects})(ProjectList);
