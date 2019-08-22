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
  display: flex;
  justify-content: space-between;
  padding: 1.4375em 1.4375em;
  align-items: center;
  color: rgba(67, 66, 93, 1);
  div{
    text-align: center;
    line-height: 17px;
  }
`;
const ProjectIntroduction = props => {
  const { user } = useSelector(s => s);
  return (
    <ProjectIntroContainer>
      <h1>Hello {user.firstName}, welcome to your dashboard.</h1>
      <div>
      <h3>12:07 PM</h3>
      <p>8/12/2019</p>
        
      </div>
    </ProjectIntroContainer>
  );
};
export default ProjectIntroduction;
