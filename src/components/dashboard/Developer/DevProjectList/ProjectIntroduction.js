import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProjectIntroContainer = styled.div`
  font-size: 1.8rem;
  max-width: 1657px;
  background: #f2f3ff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 8px #ffffff;
  border-radius: 5px;
  opacity: 1;
`;
const ProjectIntroduction = props => {
  const { user } = useSelector(s => s);
  return (
    <ProjectIntroContainer>
      <h1>Hello {user.name}, welcome to your dashboard</h1>
      <div>
        
      </div>
    </ProjectIntroContainer>
  );
};
export default ProjectIntroduction;
