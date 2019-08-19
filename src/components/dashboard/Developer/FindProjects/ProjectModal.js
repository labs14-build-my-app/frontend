import React, { Component } from 'react'
import ReactDOM from "react-dom"
import styled from "styled-components";
const ProjectModalModal = styled.div`
background: black;
z-index: 600;
width: 1000px;
height: 1000px;
`

const element = document.getElementById("root");
const modalRoot = document.getElementById("modal-root")
export class ProjectModal extends Component {
     el = document.createElement("div")
  componentDidMount(){
      modalRoot.appendChild(this.el)

  }
  componentWillUnmount(){
      modalRoot.removeChild(this.el)
  }
    render() {
        console.log(this.props);
        
        return ReactDOM.createPortal(
            <ProjectModalModal>
                 
            </ProjectModalModal>, this.el
        )
    }
}

export default ProjectModal
