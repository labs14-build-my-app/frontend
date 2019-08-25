import React, { useState, useEffect } from 'react';
import ProjectsLoader from './ProjectsLoader';
import {connect, useSelector} from 'react-redux';


import {fetchSelfProjects} from '../../../../../../redux/actions';

// Get information from state about the users projects, then pass it as props to the projects loader



const ProjectsList = ({fetchSelfProjects, history, devProjectList}) => {

	const pathname = useState(history.location.pathname)[0];

	useEffect( () => {
		if (pathname === "/dev/dashboard"){
			fetchSelfProjects();
		}
	}, [pathname])

	return(
		<div>
			{devProjectList.slice(0,5).map(projectData => {
				return(
					<ProjectsLoader {...projectData} />
				)
			})}
		</div>
	)
}

const mapStateToProps = (state) => {
	console.log(state);

	return({
		devProjectList: state.devProjectList,
	});
}

export default connect(mapStateToProps, {fetchSelfProjects})(ProjectsList);
