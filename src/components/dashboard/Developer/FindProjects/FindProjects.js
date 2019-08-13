import React, { Component } from "react";
import { connect } from "react-redux";
import FindProjectsSearchBar from "./FindProjectsSearchBar";
import styled from "styled-components";
const FindProjectsContainer = styled.div`
  .find-proj-top {
    display: flex;
    justify-content: space-around;
    margin-bottom: 5.125em;
    .all-project-btn,
    .saved-project-btn {
      font-size: 1.8rem;
      color: #9592a8;
    }
    .all-project-btn {
      margin-right: 2.1875em;
      max-width: 161px;
    }
    .saved-project-btn {
      margin-left: 2.1875em;
      max-width: 191px;
    }
    input {
      padding: 17px 40px 15px 40px;
      border-radius: 6px;
      border: none;
      max-width: 680px;
      width: 100%;
      font-size: 1.8rem;
    }
    button {
      background: #ffffff;
      border-radius: 6px;
      box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.16);
      padding: 16px 30px;
      border: none;
      width: 100%;
    }
  }
  .find-proj-description {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 1.8rem;
      color: #9592a8;
    }
    button {
      display: flex;
      align-items: center;
      p,
      img {
        margin: 0 0.5em;
        font-size: 1.3rem;
        text-transform: uppercase;
      }
    }
  }
`;
export class FindProjects extends Component {
  render() {
    console.log(this.props);
    return (
      <FindProjectsContainer>
        <div className="find-proj-top">
          <button className="all-project-btn">ALL PROJECTS</button>
          <FindProjectsSearchBar />
          <button className="saved-project-btn">SAVED PROJECTS</button>
        </div>
        <div className="find-proj-description">
          <h2>
            There are {this.props.projectList.length} projects open for project
            proposals.
          </h2>
          <button>
            <p>refresh </p>
            <img
              src={process.env.PUBLIC_URL + "/images/redo-alt.svg"}
              alt="refresh"
            />
          </button>
        </div>
      </FindProjectsContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    projectList: state.projectList
  };
};

export default connect(
  mapStateToProps,
  {}
)(FindProjects);
