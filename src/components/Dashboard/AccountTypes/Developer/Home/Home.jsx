import React, { useState, useEffect } from 'react';
import {connect, useSelector} from 'react-redux';
import {fetchSelfProjects} from '../../../../../redux/actions';
import styled from 'styled-components';

import HelloUser from '../../Shared/HelloWidget';
import ProjectsLoader from './ProjectsLoader';
import NotificationCenter from '../../../NotificationCenter/NotificationContainer';
import { defaultProps } from 'recompose';

// Get information from state about the users projects, then pass it as props to the projects loader
const HomeContainer = styled.div`
	background: red;
`
const Home = (props) => {
	const {fetchSelfProjects, history, devProjectList} = props;

	const pathname = useState(history.location.pathname)[0];

	useEffect( () => {
		if (pathname === "/dev/home"){
			fetchSelfProjects();
		}
	}, [pathname])


	const validDevProjectList = devProjectList || devProjectList.length > 0 ;

	return(
		<div className="home">
			<HelloUser pathname={props.history.location.pathname}/>
			<HomeContainer>
				{validDevProjectList && devProjectList.slice(0,5).map(projectData => {
					return(
						<ProjectsLoader {...projectData} />
					)
				})}
			</HomeContainer>
			
		</div>
	)
}

const mapStateToProps = (state) => {
	console.log(state);

	return{
		devProjectList: state.devProjectList,
	};
}

export default connect(mapStateToProps, {fetchSelfProjects})(Home);
