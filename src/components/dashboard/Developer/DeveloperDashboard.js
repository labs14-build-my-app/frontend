import React, { Component } from "react";
import ProjectBoard from "./ProjectBoard";
import NotificationCenter from "../NotificationCenter/NotificationContainer";
import styled from "styled-components";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header/Header";

const SideContent = styled.div`
  display: flex;
  justify-content: evenly;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 7.25em;
  margin-top: 4em;
  max-width: 1840px;
height: 950px;
background: transparent linear-gradient(297deg, #F2F3FF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
opacity: 1;
  .side-notif-and-statement-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: normal;
    margin-top: 4em;
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
      <SideContent>
        <Redirect to={`${pathname}`} />
        <Header />
        <Route
          path="/dev/dashboard"
          render={() => {
            return (
              <>
                <ProjectBoard {...this.props} />
                {this.renderNotificationAndStatement()}
              </>
            );
          }}
        />
        <Route path="/dev/find/projects" component={ProjectBoard}/>
      </SideContent>
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
