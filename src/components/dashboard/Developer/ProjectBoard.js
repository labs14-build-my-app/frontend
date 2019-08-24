import React, { Component } from "react";
import styled from "styled-components";
import { transparentBackdrop } from "../cssVariables";
import FindProjects from "./FindProjects/FindProjects";
import ProjectList from "./ProjectList";

export class ProjectBoard extends Component {
  render() {
    const [dashboard, findNewProjects] = [
      "/dev/dashboard",
      "/dev/find/projects"
    ];
    
    const { pathname } = this.props.history.location;
    console.log(pathname === findNewProjects);
    
    if (pathname !== dashboard && pathname !== findNewProjects) {
      return null;
    }
    
    return (
      <ProjectBoardContainer>

        {pathname === dashboard ? (
          <>
            <ProjectList {...this.props} pathname={pathname} />
          </>
        ) : (
          pathname === findNewProjects && (     
            <div className="find-proj-full-container">
              <FindProjects />
              <ProjectList {...this.props} pathname={pathname} />
            </div>
          )
        )}
      </ProjectBoardContainer>
    );
  }
}

export default ProjectBoard;

const ProjectBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  border: none;
  margin-top: 2.5em;
  background: transparent linear-gradient(248deg, #F2F3FF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
  .find-proj-full-container {
    padding: 7.5em 12.6875em 6.125em 8.4375em;

  }
`;
