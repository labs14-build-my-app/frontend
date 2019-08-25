import React, { useState, useEffect } from 'react';
import {connect, useSelector} from 'react-redux';
import {fetchSelfProjects} from '../../../../../redux/actions';

import HelloUser from '../../Shared/HelloWidget';
import ProjectsLoader from './ProjectsLoader';
import NotificationCenter from '../../../NotificationCenter/NotificationContainer';

// Get information from state about the users projects, then pass it as props to the projects loader

const Index = ({fetchSelfProjects, history, devProjectList}) => {

	const pathname = useState(history.location.pathname)[0];

	useEffect( () => {
		if (pathname === "/dev/home"){
			fetchSelfProjects();
		}
	}, [pathname])

	return(
		<div className="home">
			<HelloUser />
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

export default connect(mapStateToProps, {fetchSelfProjects})(Index);
