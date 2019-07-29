import React, { Component } from "react";
import Project from "./Project";
export class ProjectList extends Component {
  render() {
    return (
      <div>
        <ul>
          <Project />
          {/* //map over projects */}
        </ul>
      </div>
    );
  }
}

export default ProjectList;
