import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  electricViolet,
  sunglow,
  shamrock,
  setColorAndOpacity
} from "../../cssVariables";
import { connect } from "react-redux";
// import { NavLink, Link } from "react-router-dom";

// Needs to grab status of project from parents to display on .progress-circle{}
// Change Background property to reflect progress from actual backend
const DevListProjectStyle = styled.li`
  max-width: 1126px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 8px 0px ${props => setColorAndOpacity(searchStatus(props.theme.status), 0.25)};
    /* box-shadow: 5px 5px 8px #FFF9D9; */
  border-radius: 4px;
  opacity: 1;
  display: flex;
  justify-content: space-evenly;
  padding: 1.4375em 2.5em;
  align-items: center;
  margin-bottom: 1.5em;
  .project-owner-and-image {
    margin-right: 12vw;
  }
  .project-column {
    display: flex;
    flex-direction: column;
    color: #43425d;
    line-height: 17px;
    h3 {
      font-size: 1.5rem;
      color: #43425d;
    }
    p {
      font-size: 1.3rem;
      color: #9592a8;
    }
  }
  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
  .project-status {
    padding: 0.9375em 3.4375em;
    /* searchStatus(status, returnText, returnTextColor) */
    color:  ${(props) => searchStatus(props.theme.status, false, true)};
    font-weight: bolder;
    font-size: 1.5rem;
    background: ${(props) => setColorAndOpacity(searchStatus(props.theme.status), .25)} 0% 0% no-repeat padding-box;
  }
`;

const searchStatus = (status, returnText, returnTextColor) => {
  console.log(status);
  switch (status) {
    case "searching":
      return returnTextColor ? "#C2A721" : returnText ? "Searching" : sunglow;
    case "completed":
      return returnTextColor ? "#6C63FF" :  returnText ? "Completed" : electricViolet;
    case "in progress":
      return returnTextColor ? "#3D9E47F" :  returnText ? "In Progress" : shamrock;
    // unsure of colors for these
    case "cancelled":
      return  returnTextColor ? "red" :   returnText ? "Cancelled" : "#FFB3B3";
    case "review":
      return returnTextColor ? "#6C63FF" : returnText ? "Waiting For Review" : "#FFF9D9";
    case "updated":
      return returnTextColor ? "#6C63FF" :  returnText ? "Update Proposal" : "#FFF9D9";
    default:
      return returnTextColor ? "#6C63FF" :  returnText ? "Project Status Invalid" : ""; 
      // ^ this will return black;
  }
};
const DevProject = props => {
  const [isActiveChevron, setActiveChevron] = useState(false);
  const [projectColorStatus, setProjectColorStatus] = useState("");
  console.log(props);
  return (
    <ThemeProvider theme={props}>
      <DevListProjectStyle>
        <img
          src={`${
            process.env.PUBLIC_URL
          }/images/Landing Page - Mobile 375x667.png`}
        />
        <div className="project-owner-and-image project-column">
          <h3>{props.projectName || "Project Name"}</h3>
          <p>{props.name || "Project Owner"}</p>
        </div>
        <div className="dev-project-start-date project-column">
          <h3>{props.createdAt}</h3>
          <p>Start Date</p>
        </div>
        <div className="dev-project-end-date project-column">
          <h3>{props.endDate || "ends pretty soon my dude"}</h3>
          <p>Estimated End DaTe</p>
        </div>
        <div className="dev-project-cost project-column">
          <h3>${props.cost || 5000} </h3>
          <p>total cost</p>
        </div>
        <div className="dev-project-deposit project-column">
          <h3>${props.deposit || 1520}</h3>
          <p>deposit</p>
        </div>
        <div className="project-status">{searchStatus(props.status, true) || "project status"}</div>
      </DevListProjectStyle>
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    state: state.example
  };
};
export default connect(
  mapStateToProps,
  {}
)(DevProject);
