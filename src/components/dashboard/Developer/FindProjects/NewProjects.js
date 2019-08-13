import React from "react";
import styled from "styled-components";
import {
  headerFontDesktop,
  headerFontFamily,
  headerFontWeight,
  projectFontSubtext,
  trout,
  projectParagraphFont
} from "../../cssVariables";
import { Link } from "react-router-dom";
const EntrepreneurProjects = styled.li`
background: #fff;
position: relative;
max-width: 530px;
box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.16);
border-radius: 6px;
.find-proj-options{
    float: right;
    clear: right;
    padding: 40px 40px 0 0;
    
}
.owner-img-and-name{
  display: flex;
  align-items: center;
  margin-top: 2.5em;
  padding: 2.5em 2.5em 0 2.5em;
  text-decoration: none;
  color: inherit;
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
  color: ${trout};
  margin-bottom: .625em;

  }
    }
    p{
    ${"" /* project description */}
  font-size: ${projectParagraphFont};
  line-height: 24px;
}
}
.find-proj-cta-btn-container{
    display: flex;
    justify-content: space-evenly;
    margin: 1.25em 1.875em 1.875em;
    padding-top:1.25em; 
    border-top: 1px solid #9592A8;
    color: #9592A8;
    
}
`;
 const NewProjects  = ({projectName, projectOwner, description}) => {

    return (
      <EntrepreneurProjects>
        <img
          src={process.env.PUBLIC_URL + "/images/icon_dots.svg"}
          alt="menu"
          className="find-proj-options"
        />
        <div className="owner-img-and-name">
          <h1>look at this photograph</h1>
          <div>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/dev/project/id"
            >
              <h3>{projectName}</h3>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/dev/project/id/entrepreneur"
            >
              <h4>{projectOwner}</h4>
            </Link>
            <p> {description}</p>
            <div className="find-proj-cta-btn-container">
              <button>SAVE FOR LATER</button>
              <button>MORE INFORMATION</button>
            </div>
          </div>
        </div>
      </EntrepreneurProjects>
    );
  }

export default NewProjects