import React from "react";
import FindProjectsSearchBar from "./FindProjectsSearchBar";
import styled from "styled-components";
import ProjectsLoader from "./ProjectsLoader";

const FindProjectsContainer = styled.div``;

const FindProjects = () => {
  return (
    <FindProjectsContainer>
      <FindProjectsSearchBar />
      <ProjectsLoader />
    </FindProjectsContainer>
  );
};

export default FindProjects;
