import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchSelfProjects, fetchAllProjects } from "../../../../../redux/actions";
import { connect } from "react-redux";
import NewProjects from '../FindProjects/NewProjects'
import { Link } from "react-router-dom";
import styled from 'styled-components'

// Gets projects for the Find Projects page

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
	width: 105%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;

	flex-basis: content;

	overflow-y: scroll;
	padding-bottom: 50rem;

	::-webkit-scrollbar{
		display: none;
	}
`;

const ProjectsLoader = (props) => {

	useEffect(() => { props.fetchAllProjects(); }, [])

	return (
		<ProjectsLoaderWrapper>
			<Scrollable>
				{props.searchProjectList.map((project, index) => {
					return <NewProjects index={index} name={project.name} owner={project.ownerName} description={project.description} />
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
