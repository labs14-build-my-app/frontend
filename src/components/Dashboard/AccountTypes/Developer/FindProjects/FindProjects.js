import React from "react";
import FindProjectsSearchBar from "./FindProjectsSearchBar";
import styled from "styled-components";
import ProjectsLoader from "./ProjectsLoader";

const FindProjectsContainer = styled.div`
	height: 100%;
	margin-top: 7.5rem;
`;

const FindProjects = () => {
  return (
    <FindProjectsContainer>
      <FindProjectsSearchBar />
      <ProjectsLoader />
    </FindProjectsContainer>
  );
};

export default FindProjects;
