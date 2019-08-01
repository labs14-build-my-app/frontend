import React, { Component } from "react";
import ProjectBoard from "./ProjectBoard/ProjectBoard";
import QuarterlyStatement from "./QuarterlyStatement/QuarterlyStatement.js";
import NotificationCenter from "./NotificationCenter/NotificationContainer";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
  render() {
    return (
        <SideContent>
          <ProjectBoard {...this.props} />{/* passing history object */}
          <div className="side-notif-and-statement-container">
            <QuarterlyStatement />
            <NotificationCenter />
          </div>
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
