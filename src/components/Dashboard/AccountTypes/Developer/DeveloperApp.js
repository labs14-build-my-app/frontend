import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import PageRenderer from "./PageRenderer";

import NotificationCenter from "../../NotificationCenter/NotificationContainer";

class DeveloperApp extends Component {

  render() {
    const { pathname } = this.props.history.location
    
    return (
      <PageContentContainer>
        {pathname=== "/" && <Redirect to="/dev/home" />}
        
        <Route path="/dev/home" render={() => {
            return (
              <div className="developer-home">
                <div className="project-board-and-notifications">
                  <PageRenderer {...this.props} />
                  <div className="side-notif-and-statement-container">
                    <NotificationCenter />
                  </div>
                </div>
              </div>
            );
          }}
        />

        <Route path="/dev/find/projects" render={() => {
          return (
            <div className="find-projects">
              <PageRenderer {...this.props} />
            </div>
          );
        }} />

      </PageContentContainer>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(DeveloperApp);

const PageContentContainer = styled.div`
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
