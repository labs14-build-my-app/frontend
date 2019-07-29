import React, { Component } from "react";
import Project from "./Project";
import styled from "styled-components";

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


