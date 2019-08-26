import React, { useState, useEffect } from 'react';
import {connect, useSelector} from 'react-redux';
import {fetchSelfProjects} from '../../../../../redux/actions';
import styled from 'styled-components';

import HelloUser from '../../Shared/HelloWidget';
import ProjectsLoader from './ProjectsLoader';
import NotificationCenter from '../../Shared/NotificationCenter/NotificationCenter';
import { defaultProps } from 'recompose';

// Get information from state about the users projects, then pass it as props to the projects loader
const HomeContainer = styled.div`
	height: 100%;
	margin-top: 4rem;
	padding: 2.5rem 4.5rem 2.5rem;
	background: transparent linear-gradient(248deg, rgba(242, 243, 255, 1) 0%, rgba(255, 255, 255, 1) 100%) 0% 0% no-repeat padding-box;
	box-shadow: 5px 5px 8px rgba(255, 255, 255, 0.25);
`
const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
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
				<FlexWrapper>
					<div className="projects-list">
						{validDevProjectList && devProjectList.slice(0,5).map(projectData => {
							return(
								<ProjectsLoader {...projectData} />
							)
						})}
					</div>
					<div className="notification-list">
						<NotificationCenter />
					</div>
				</FlexWrapper>
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
