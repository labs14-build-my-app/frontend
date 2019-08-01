import React, { Component } from "react";
import styled from "styled-components";
import {
  electricViolet,
  sunglow,
  shamrock,
  headerFontDesktop,
  headerFontFamily,
  headerFontWeight,
  projectFontSubtext,
  trout,
  projectParagraphFont
} from "../cssVariables";
import { example } from "../../../actions";
import { connect } from "react-redux";
const colorArray = [electricViolet, sunglow, shamrock]; //remove when backend updates progress

// Needs to grab status of project from parents to display on .progress-circle{}
// Change Background property to reflect progress from actual backend
class Project extends Component {
  render() {
    const ProjectStyle = styled.li`
  margin-bottom: 1.25em;
  background: #ccc;
  box-shadow: 5px 5px 8px rgba(0,0,0,.16);
  border-radius: 10px;
  background: linear-gradient( 74deg, rgba(255,255,255,1) 0%, rgba(239,239,239,1) 100% );
  border-left: 15px solid ${colorArray[this.props.color]};
  .proj-head{
    display: flex;
    ${"" /* position: relative; */}
    justify-content: space-between;
    .status-and-chevron{
      ${"" /* position: absolute;
      top: 0;
      right: 0; */}
      display: inline-flex;

      .progress-circle{
      background: ${colorArray[this.props.color]};
      padding: 15px;
      border: 0;
      border-radius: 50%;
      max-width: 0;
      max-height: 0;
    }
    .chevron-up{
      background: white;
      padding: 15px;
      transform: rotate(-90deg);
      border: 0;
      border-radius: 50%;

    }
  
  }

  .owner-img-and-name{
    display: flex;
    align-items: center;
    margin: 2.5em;
      div{
        margin-left: 1.3em;
        h3{
      ${"" /* project title */}
      font-size: ${headerFontDesktop};
      font-family: ${headerFontFamily};
      font-weight: ${headerFontWeight};
      margin-bottom: .3125em;
    }
    h4{
    ${"" /* project owner */}
    font-size: ${projectFontSubtext};
    color: ${trout}
    margin-bottom: .625em;
 
    }
      }
  }
  
  p{
    ${"" /* project description */}
    font-size: ${projectParagraphFont};
  }
  
 
}
.allprojects-cta{
    display: block;
    flex-direction: column;
    justify-content: space-between;
    button{
     display: inline-block;
    }
    p{
      margin-left: 3.8em;
      margin-bottom: 3.75em;
    }
  }
`;
    return (
      <ProjectStyle>
        <div className="proj-head">
          <div className="owner-img-and-name">
            <h1>face of gurl</h1>
            <div>
              <h3>Project Title</h3>
              <h4>project owner name</h4>
              <p> project description</p>
            </div>
          </div>
          <div>
            <div className="status-and-chevron">
              <img
                className="chevron-up"
                src={process.env.PUBLIC_URL + "/images/chevron-right.svg"}
                alt="open or close"
              />
              <div className="progress-circle" />
            </div>
          </div>
        </div>
        <div className="allprojects-cta">
          <button>
            All Projects{" "}
            <img
              src={process.env.PUBLIC_URL + "/images/chevron-right.svg"}
              alt="view all projects"
            />
          </button>
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
