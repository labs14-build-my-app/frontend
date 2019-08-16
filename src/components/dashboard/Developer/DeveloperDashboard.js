import React, { Component } from "react";
import ProjectBoard from "./ProjectBoard";
import NotificationCenter from "../NotificationCenter/NotificationContainer";
import styled from "styled-components";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import ProjectIntroduction from "../Developer/DevProjectList/ProjectIntroduction"
const DashboardContentContainer = styled.div`
  display: flex;
  justify-content: evenly;
  justify-content: center;
  align-items: stretch;
  ${'' /* margin-bottom: 7.25em;
  margin-top: 4em; */}
  flex-direction: column;

  .side-notif-and-statement-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: normal;
    


  }
  .project-board-and-notifications{
    display: flex;
  background: transparent linear-gradient(248deg, rgba(242, 243, 255, 1) 0%, rgba(255, 255, 255, 1) 100%) 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 8px rgba(255, 255, 255, 0.25);
  margin-top: 2.5em;
  }
`;

class DeveloperDashboard extends Component {
  renderNotificationAndStatement = () => {
    return (
      <>
        <div className="side-notif-and-statement-container">
          <NotificationCenter />
        </div>
      </>
    );
  };
  render() {
    const { pathname } = this.props.history.location
    return (
      <DashboardContentContainer>
        <Redirect to={`${pathname}`} />
        <Route
          path="/dev/dashboard"
          render={() => {
            return (<>
              <ProjectIntroduction />
              <div className="project-board-and-notifications">
                <ProjectBoard {...this.props} />
                {this.renderNotificationAndStatement()}
              </ div>
              </>
            );
          }}
        />

        <Route path="/dev/find/projects" component={ProjectBoard}/>
      </DashboardContentContainer>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(DeveloperDashboard);
