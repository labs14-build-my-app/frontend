import React, { Component } from "react";
import ProjectBoard from "./DevProjectBoard/ProjectBoard";
import QuarterlyStatement from "./QuarterlyStatement/QuarterlyStatement.js";
import NotificationCenter from "./NotificationCenter/NotificationContainer";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

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

class Dashboard extends Component {
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
    const { pathname } = this.props.history.location;
    console.log(pathname === "/entrepreneur");
    return (
      <SideContent>
        {/* DEVELOPER COMPONENTS */}
        {pathname.startsWith("/dev") && <ProjectBoard {...this.props} />}
        {/* passing history object */}
        {pathname === "/dev/dashboard" && this.renderNotificationAndStatement()}

        {/* END DEVELOPER COMPONENTS */}

        {/* ENTREPRENUER COMPONENTS */}

        {pathname.startsWith("/entrepreneur") && <h1> WELCOME ENTREPRENUER</h1>}
        {/* END ENTREPRENUER COMPONENTS */}
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
)(withRouter(Dashboard));
