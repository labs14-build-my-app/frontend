import React from "react";
import styled from "styled-components";
import { sunglow,shamrock,electricViolet, headerFontDesktop } from "../cssVariables";

const ProjectIntroContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 0 2.5em;
h1{
font-size: ${headerFontDesktop}
margin-bottom: .9375em;
}
p{
  font-size: 1.5rem;
  align-self: center;
  width: 80%;
}
.proj-title{
 display: flex;
 justify-content: space-between;
 align-self: stretch;
 
 
}
.proj-detail{
  display: flex;
  justify-content: space-between;

  .progress-square-container{
    width: 20%;
    padding-left:1.4375em;
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
      <ul className="progress-square-container">
      <li><span style={{background:`${sunglow}`}}/> Proposal Stage</li>
      <li><span style={{background:`${shamrock}`}}/>  In Progress</li>
      <li><span style={{background:`${electricViolet}`}}/>  Completed / Canceled</li>
    </ul>
    </section>
 

    </ProjectIntroContainer>
  );
}
