import React, { Component } from "react";
import ProjectIntroduction from "./DevProjectList/ProjectIntroduction";
import ProjectList from "./ProjectList";
import styled from "styled-components";
import { transparentBackdrop } from "../cssVariables";
import FindProjects from "./FindProjects/FindProjects";
;
const ProjectBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1448px;
  margin: 4em 2.5em 0 2.5em;
  padding: 2.5em;
  width: 100%;
  border-radius: 10px;
  border: none;
  .find-proj-full-container{
    padding: 7.5em 12.6875em 6.125em 8.4375em;
  }
  ${transparentBackdrop}
`;
export class ProjectBoard extends Component {

  render() {
    const[dashboard, findNewProjects] = ["/dev/dashboard","/dev/find/projects"];
    const {pathname} = this.props.history.location;
    console.log(pathname)
    if(pathname !== dashboard && pathname !== findNewProjects){
      return null;
    }
    return (
      <ProjectBoardContainer>
        {/* render the dev dashboard with description of projects*/}
        {/* {pathname === dashboard ? <ProjectIntroduction /> : pathname === findNewProjects && <FindProjects /> } */}

        {

        pathname === dashboard ? 
        <> 
          <ProjectIntroduction /> 
          <ProjectList {...this.props} pathname={pathname} />
        </>  : pathname === findNewProjects &&
        <div className="find-proj-full-container">
        <FindProjects />
        <ProjectList {...this.props} pathname={pathname} />
        </div>}
        
      </ProjectBoardContainer>
    );
  }
}


export default ProjectBoard;
