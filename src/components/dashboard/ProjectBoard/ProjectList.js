import React, { Component } from "react";
import Project from "./Project";

export default class ProjectList extends Component {
  render() { 
    return (
      <div>
        <ul>
          <Project />
          <Project />
          <Project />
        </ul>
      </div>
    );
  }
}


