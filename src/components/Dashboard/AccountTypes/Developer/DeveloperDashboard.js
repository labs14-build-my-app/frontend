import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import HelloUser from "./Dashboard/Hello User/HelloUser"
import ProjectsList from "./Dashboard/Projects Loader/ProjectsList";
import NotificationCenter from "../NotificationCenter/NotificationContainer";
import ProjectBoard from "./ProjectBoard";

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
        {pathname=== "/" && <Redirect to="/dev/dashboard" />}
        <Route
          path="/dev/dashboard"
          render={() => {
            return (
              <div className="developer-home">
                <HelloUser />
                <div className="project-board-and-notifications">
                  <ProjectBoard {...this.props} />
                  {this.renderNotificationAndStatement()}
                </ div>
              </ div>
            );
          }}
        />

        <Route path="/dev/find/projects" component={ProjectBoard}/>
        <Route path="/dev/my/projects"  component={ProjectsList} />
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