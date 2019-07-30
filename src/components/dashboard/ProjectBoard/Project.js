import React, { Component } from "react";
import styled from "styled-components";
import { electricViolet,sunglow, shamrock, headerFontDesktop, headerFontFamily, headerFontWeight,projectFontSubtext,trout, projectParagraphFont } from "../cssVariables";
const colorArray = [electricViolet,sunglow,shamrock]; //remove when backend updates progress


// Needs to grab status of project from parents to display on .progress-circle{}
// Change Background property to reflect progress from actual backend
export default class Project extends Component {
  render() {
const ProjectStyle = styled.li`
margin-bottom: 1.25em;
.proj-head{
  display: flex;
  position: relative;
  .progress-circle{
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    background: ${colorArray[this.props.color -1]};
    border-radius: 50%;
  }
  h3{
    ${'' /* project title */}
    font-size: ${headerFontDesktop};
    font-family: ${headerFontFamily};
    font-weight: ${headerFontWeight};
  }
  h4{
    ${'' /* project owner */}
  font-size: ${projectFontSubtext}
  color: ${trout}
  }
  p{
    font-size: ${projectParagraphFont};
  }
  .chevron-up{
    transform: rotate(-90deg);
    background: white;
  }
}
`
    return (
      <ProjectStyle>
      <div className="proj-head">
        <h1>face of gurl</h1>
        <div>
        <h3>Project Title</h3>
        <h4>project owner name</h4>
        </div>
        <div>
        <img className="chevron-up" src={process.env.PUBLIC_URL + "/images/chevron-right.svg"} alt="open or close"/>
        <div className="progress-circle"></div>
        </div>
      </div>
        <p> project description</p>
      </ProjectStyle>
    );
  }
}
