import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchAllProjects, saveProject } from "../../../../redux/actions";

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
background: #F2F3FF 0% 0% no-repeat padding-box;
box-shadow: 0px 5px 8px #E2E0FF;
border-radius: 5px;
opacity: 0.5;
padding: 1.25em;
.project-container{
background: #fff;
position: relative;
max-width: 530px;
box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.16);
border-radius: 6px;
padding: .9em;

}
`;

const NewProjects = ({
  projectName,
  projectOwner,
  description,
  saveProject,
  id
}) => {
  return (
    <EntrepreneurProjects>
      <div className="project-container">
        <div className="project-top">
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
                <button onClick={() => saveProject(id)}>SAVE FOR LATER</button>
                <button>MORE INFORMATION</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EntrepreneurProjects>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  { fetchAllProjects, saveProject }
)(NewProjects);
