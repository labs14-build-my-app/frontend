import React from "react";
import styled from "styled-components";

const ProjectIntroContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 800px;
.proj-title{
 display: flex;
 justify-content: space-between;
background: red;
}
.proj-detail{
  display: flex;
  justify-content: space-between;
}
`
//stateful component
export default function ProjectIntroduction() {

  return (
    <ProjectIntroContainer>
    <section className="proj-title" >
    <h1>Projects </h1>
    <div>
    <button>All Projects <img src={process.env.PUBLIC_URL +"/images/chevron-right.svg"} /></button>
    </div>
    </section>
    <section className="proj-detail">
      <p>
        {" "}
        Here's some of your most recent projects, you can click on one for more
        information about it or to access the project's page and or submit
        project proposals to the client.
      </p>
      <ul>
      <li>SQUAREIMG Proposal Stage</li>
      <li>SQUAREIMG In Progress</li>
      <li>SQUAREIMG Completed / Canceled</li>
    </ul>
    </section> 

    </ProjectIntroContainer>
  );
}
