import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchSelfProjects, fetchAllProjects } from "../../../../../redux/actions";
import { connect } from "react-redux";
import NewProjects from '../FindProjects/NewProjects'
import { Link } from "react-router-dom";
import styled from 'styled-components'

// Gets projects for the Find Projects page

const ProjectsLoaderWrapper = styled.div`

border: 1px solid red;
`;

const Scrollable = styled.div`
	border: 2px dashed green;
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
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
