import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import PageRenderer from "./PageRenderer";

const DeveloperAppContainer = styled.div` 
padding: 4rem 11.2rem 10.6rem 6.9rem;

`;

class DeveloperApp extends Component {

  render() {
    const { pathname } = this.props.history.location
    
    return (
      <DeveloperAppContainer>
        {pathname=== "/" && <Redirect to="/dev/home" />}
        
        <Route path="/dev/home" render={() => {
          return (
            <div className="developer-home">
             <PageRenderer {...this.props} />
            </div>
          );
        }} />

        <Route path="/dev/find/projects" render={() => {
          return (
            <div className="find-projects">
              <PageRenderer {...this.props} />
            </div>
          );
        }} />

      </DeveloperAppContainer>
    );
  }
}

const mapStateToProps = state => { return {}; };

export default connect(mapStateToProps, {})(DeveloperApp);
