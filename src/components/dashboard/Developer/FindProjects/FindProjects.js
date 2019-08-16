import React, {useState} from "react";
import { connect, useSelector } from "react-redux";
import FindProjectsSearchBar from "./FindProjectsSearchBar";
import styled from "styled-components";

const FindProjectsContainer = styled.div`

`;


const FindProjects = () => {
  return (
    <FindProjectsContainer>
      <FindProjectsSearchBar />

      
    </FindProjectsContainer>
  )
}

export default FindProjects
