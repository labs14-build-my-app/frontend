import React, { useState } from "react";
import styled, {ThemeProvider} from "styled-components";
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
} from "../../cssVariables";
import { example } from "../../../../actions";
import { connect } from "react-redux";
import {NavLink, Link} from "react-router-dom";
// import {flipOnHover} from "../animations/keyframes" 
//basic trying out animations
const colorArray = [electricViolet, sunglow, shamrock]; //remove when backend updates progress

// Needs to grab status of project from parents to display on .progress-circle{}
// Change Background property to reflect progress from actual backend
const DevListProjectStyle = styled.li`
margin-bottom: 1.25em;
background: #ccc;
box-shadow: 5px 5px 8px rgba(0,0,0,.16);
border-radius: 10px;
background: linear-gradient( 74deg, rgba(255,255,255,1) 0%, rgba(239,239,239,1) 100% );
border-left: 15px solid ${props=> colorArray[props.theme.color]};


.proj-head{
  display: flex;
  ${"" /* position: relative; */}
  justify-content: space-between;
  .status-and-chevron{
    ${"" /* position: absolute;
    top: 0;
    right: 0; */}
    display: inline-flex;
    flex-direction: row-reverse;
    margin: 1.875em;
    div{
      margin: 0em ${10/16}em;
    }
    .progress-circle{
    background: ${props=> colorArray[props.theme.color]};
    padding: 15px;
    border: 0;
    border-radius: 50%;
    max-width: 0;
    max-height: 0;
  }
  .chevron-up{
  cursor: pointer;
  background: #fff;
  padding: 15px;
  border: 0;
  border-radius: 50%;
  max-width: 0;
  max-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: .625em;
  }

}

.owner-img-and-name{
  display: flex;
  align-items: center;
  margin: 2.5em;
  text-decoration: none;
  color: inherit
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
  display: flex;
  justify-content: flex-end;
  ${'' /* justify-content: space-between; */}
  margin: 0 ${40/16}em;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  p{
    font-size: 1.5rem;
  }
  i{
    margin-left: ${10/16}em;
    margin-bottom: ${20/16}em;
  }
}
`;


const DevProject = (props) => {
  const [isActiveChevron, setActiveChevron] = useState(false);
    return (
      <ThemeProvider theme={props}>
        <DevListProjectStyle>
          <div className="proj-head">
            <div className="owner-img-and-name">
              <h1>look at this photograph</h1>
              <div>
              <Link style={{textDecoration: "none", color: "inherit"}} to="/dev/project/id"><h3>{props.projectName}</h3></Link>
                
                <Link style={{textDecoration: "none", color: "inherit"}} to="/dev/project/id/entrepreneur"><h4>{props.projectOwner}</h4></Link>
                <p> {props.projectDescription}</p>
                
              </div>
            </div>
            <div>
              <div className="status-and-chevron">
                <div className="chevron-up" onClick={()=>setActiveChevron(!isActiveChevron)} >
                  <i className="fas fa-chevron-up" style={{transform : `${isActiveChevron ? "rotate(0deg)" : "rotate(180deg)"}`}}/>
                </div>
                <div className="progress-circle" />
              </div>
            </div>
          </div>
          <NavLink to="/dev/project/id" className="allprojects-cta">
            <p>
              Project Information{" "}
              <i className="fas fa-chevron-right" />
            </p>
          </NavLink>
        </DevListProjectStyle>
      
      </ThemeProvider>
    );
  }


const mapStateToProps = state => {
  return {
    state: state.example
  };
};
export default connect(
  mapStateToProps,
  { example }
)(DevProject);
