import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchSelfProjects, fetchAllProjects } from "../../../../../redux/actions";
import { connect } from "react-redux";
import NewProjects from '../FindProjects/NewProjects'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const ProjectsLoaderWrapper = styled.div`
	position: relative;
	overflow: hidden;
	height: 650px;
	width: 100%;

	&::after{
		height: 50%;
		width: 100%;
		content: '';
		position: absolute;
		bottom: 0;
		background: linear-gradient(180deg,rgba(255,255,255,0) 60%,rgba(242,243,255,1) 100%);
    	pointer-events: none;
	}

`;

const Scrollable = styled.div`
overflow-y: scroll;
height: 100%;
padding-bottom: 50rem;

::-webkit-scrollbar{
	display: none;
}
`

const ProjectsLoader = (props) => {

	useEffect(() => { props.fetchAllProjects(); }, [])

	return (
		<ProjectsLoaderWrapper>
			<Scrollable>
				{props.searchProjectList.map(project => {
					return <NewProjects name={project.name} owner={project.ownerName} description={project.description} />
				})}
			</Scrollable>
		</ProjectsLoaderWrapper>
	)
}

const mapStateToProps = state => {
	return {
		searchProjectList: state.searchProjectList
	}
}

export default connect(mapStateToProps, { fetchAllProjects })(ProjectsLoader);
