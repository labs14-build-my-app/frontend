import React, { Component } from "react";
import styled from "styled-components";

import Home from "./Home/Home";

const PageRendererContainer = styled.div``

export class PageRenderer extends Component {
  render() {
    const [home, createNewProject] = [
      "/ent/home",
      "/ent/projects/new"
    ];

    const { pathname } = this.props.history.location;

    if (pathname !== home && pathname !== createNewProject) {
      return null;
    }

    return (
      <PageRendererContainer>
        {pathname === home ? (
          <>
            <Home {...this.props} pathname={pathname} />
          </>
        ) : (
            pathname === createNewProject && (
              null
            )
          )}
      </PageRendererContainer>
    );
  }
}

export default PageRenderer;
