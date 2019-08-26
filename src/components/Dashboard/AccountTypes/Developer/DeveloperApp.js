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
               <PageRenderer {...this.props} />
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

const mapStateToProps = state => { return {}; };

export default connect(mapStateToProps, {})(DeveloperApp);

const PageContentContainer = styled.div`

`;
