import React, { Component } from "react";
import ProjectIntroduction from "./ProjectIntroduction"
import ProjectList from "./ProjectList";

export class ProjectBoard extends Component {
 
  render() {
    console.log(ProjectList)
    console.log("update?")
    return (
      <div>
        <ProjectIntroduction />
        <ProjectList />
      </div>
    );
  }
}

export default ProjectBoard;
