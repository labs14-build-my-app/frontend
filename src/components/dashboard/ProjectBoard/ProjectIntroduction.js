import React from "react";
import styled from "styled-components";

const ProjectIntroContainer = styled.div`
.proj-description{
 display: flex;
 justify-content: space-between;
 max-width: 800px;

}
`
//stateful component
export default function ProjectIntroduction() {

  return (
    <ProjectIntroContainer>
    <section className="proj-description" >
    <h1>Projects </h1>
    <div>
    <button>All Projects <img src={process.env.PUBLIC_URL +"/images/chevron-right.svg"} /></button>
    <ul>
      <li>SQUAREIMG Proposal Stage</li>
      <li>SQUAREIMG In Progress</li>
      <li>SQUAREIMG Completed / Canceled</li>
    </ul>
    </div>
    </section>
      
      <p>
        {" "}
        Here's some of your most recent projects, you can click on one for more
        information about it or to access the project's page and or submit
        project proposals to the client.
      </p>
    </ProjectIntroContainer>
  );
}
