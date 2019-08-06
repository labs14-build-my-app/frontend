import React, { Component } from 'react'
import FindProjectsSearchBar from './FindProjectsSearchBar';
import styled from "styled-components";
const FindProjectsContainer = styled.div`
display: flex;
justify-content: space-evenly;
padding: ${7.5-2.5}em ${8.4375-2.5}em;
.all-project-btn{
    margin-right: 2.1875em;
}
.saved-project-btn{
    margin-left: 2.1875em;
}
input{
    padding: 17px 40px 15px 40px;
    border-radius: 6px;
    border: none;
    max-width: 680px;
    width: 100%;
}
button{
    display: block;
    background: #FFFFFF;
    border-radius: 6px;
    box-shadow: 5px 5px 8px rgba(0,0,0,.16);   
    padding: 16px 30px;
    border: none;

}
`
export class FindProjects extends Component {
    render() {
        console.log(this.props)
        return (
            <FindProjectsContainer>
            <button className="all-project-btn">ALL PROJECTS</button>
            <FindProjectsSearchBar/>
            <button className="saved-project-btn">SAVED PROJECTS</button>
            </FindProjectsContainer>
        )
    }
}

export default FindProjects
