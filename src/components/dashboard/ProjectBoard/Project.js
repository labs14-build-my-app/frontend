import React, { Component } from "react";
import styled from "styled-components";
import { electricViolet,sunglow, shamrock, headerFontDesktop, headerFontFamily, headerFontWeight,projectFontSubtext,trout, projectParagraphFont } from "../cssVariables";
import { example } from '../../../actions';
import { connect } from 'react-redux';
const colorArray = [electricViolet,sunglow,shamrock]; //remove when backend updates progress


// Needs to grab status of project from parents to display on .progress-circle{}
// Change Background property to reflect progress from actual backend
 class Project extends Component {
  render() {
const ProjectStyle = styled.li`
margin-bottom: 1.25em;

.proj-head{
  display: flex;
  ${'' /* position: relative; */}
  justify-content: space-between;
  .status-and-chevron{
    ${'' /* position: absolute;
    top: 0;
    right: 0; */}
    display: inline-flex;

    .progress-circle{
    background: ${colorArray[this.props.color]};
    ${console.log(this.props.color)}
    padding: 15px;
    border: 0;
    border-radius: 50%;
    max-width: 0;
    max-height: 0;
  }
  .chevron-up{
    
    background: white;
    padding: 15px;
    ${'' /* padding needs to be this to match the width of the progress circle */}

    transform: rotate(-90deg);
    border: 0;
    border-radius: 50%;

  }
 
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
  
 
}
.description-and-cta{
    display: block;
    flex-direction: column;
    justify-content: space-between;
    button{
     display: inline-block;
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
        <div className="status-and-chevron">
          <img className="chevron-up" src={process.env.PUBLIC_URL + "/images/chevron-right.svg"} alt="open or close"/>
          <div className="progress-circle"/>
        </div>
        </div>
      </div>
      <div className="description-and-cta">
        <p> project description</p>
        <button>All Projects <img src={process.env.PUBLIC_URL +"/images/chevron-right.svg"} alt="view all projects" /></button>
        </div>
      </ProjectStyle>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.example
  };
};
export default connect(
  mapStateToProps,
  { example }
)(Project);