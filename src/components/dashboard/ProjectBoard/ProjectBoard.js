import React, { Component } from "react";
import ProjectIntroduction from "./ProjectIntroduction"
import ProjectList from "./ProjectList";

export class ProjectBoard extends Component {
 
  render() {
    console.log("projectboard")
    console.log(ProjectList)
    console.log("update?")
    return (
      <div>
        <ProjectIntroduction />
        {console.log("this is updating")}
        <ProjectList />
      </div>
    );
  }
}

export default ProjectBoard;
