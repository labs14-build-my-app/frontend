import React, { Component } from "react";
import styled from "styled-components";

import Home from "./Home/Home";
import FindProjects from "./FindProjects/FindProjects";

const PageRendererContainer = styled.div``

export class PageRenderer extends Component {
  render() {
    const [home, findNewProjects] = [
      "/dev/home",
      "/dev/find/projects"
    ];

    const { pathname } = this.props.history.location;
    console.log(pathname === findNewProjects);

    if (pathname !== home && pathname !== findNewProjects) {
      return null;
    }

    return (
      <PageRendererContainer>
        {pathname === home ? (
          <>
            <Home {...this.props} pathname={pathname} />
          </>
        ) : (
          pathname === findNewProjects && (
              <FindProjects />
          )
        )}
      </PageRendererContainer>
    );
  }
}

export default PageRenderer;
