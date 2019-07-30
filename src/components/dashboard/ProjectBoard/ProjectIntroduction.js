import React from "react";
import styled from "styled-components";
import { sunglow,shamrock,electricViolet, headerFontFamily } from "../cssVariables";

const ProjectIntroContainer = styled.div`

.proj-title{
 display: flex;
 justify-content: space-between;
 font-family: ${headerFontFamily}
}
.proj-detail{
  display: flex;
  justify-content: space-between;
  ul{
    li{
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      border-radius: 2px;
      span{
        padding: 20px;
        display: block;
      }
    }
  }
}
`
//stateful component
export default function ProjectIntroduction() {

  return (
    <ProjectIntroContainer>
    <section className="proj-title" >
    <h1>Projects </h1>
    <div>
    <button>All Projects <img src={process.env.PUBLIC_URL +"/images/chevron-right.svg"} alt="view all projects" /></button>
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
      <li><span style={{background:`${sunglow}`}}/> Proposal Stage</li>
      <li><span style={{background:`${shamrock}`}}/>  In Progress</li>
      <li><span style={{background:`${electricViolet}`}}/>  Completed / Canceled</li>
    </ul>
    </section> 

    </ProjectIntroContainer>
  );
}
