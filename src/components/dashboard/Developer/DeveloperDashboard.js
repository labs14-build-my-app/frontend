import React, { Component } from "react";
import ProjectBoard from "./ProjectBoard";
import QuarterlyStatement from "../QuarterlyStatement/QuarterlyStatement.js";
import NotificationCenter from "../NotificationCenter/NotificationContainer";
import styled from "styled-components";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const SideContent = styled.div`
  display: flex;
  justify-content: evenly;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 7.25em;
  margin-top: 4em;
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
          <QuarterlyStatement />
          <NotificationCenter />
        </div>
      </>
    );
  };
  render() {
    console.log(this.props);
    // const { pathname } = this.props.history.location

    return (
      <SideContent>
        <Redirect to="/dev/dashboard" />
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
