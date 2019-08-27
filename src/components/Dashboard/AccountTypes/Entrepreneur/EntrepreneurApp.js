import React, {useState, useEffect} from 'react'
import HelloWidget from "../Shared/HelloWidget";
import styled from "styled-components"
import NotificationCenter from "../Shared/NotificationCenter/NotificationCenter.jsx"
import { Route  } from "react-router-dom";
import {connect} from "react-redux"
import EntForm from './EntForm';
const EntAppContainer = styled.div`
    display: flex;
`
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
const EntrepreneurApp = (props) => {
	const {fetchSelfProjects, history, devProjectList} = props;

    //devProjectList to entrepreneurProjectList 
    //change pathname === "/dev/home" to "/entrepreneur/home"
    //change fetchSelfProjects to fetchOwnerProjects or something
    
	const pathname = useState(history.location.pathname)[0];

	useEffect( () => {
		if (pathname === "/dev/home"){
			fetchSelfProjects();
		}
	}, [pathname])


	const validDevProjectList = devProjectList || devProjectList.length > 0 ;

	return(
		<div className="home">
			<HelloWidget pathname={props.history.location.pathname}/>
			<HomeContainer>
				<FlexWrapper>
                <Route exact path="/ent/projects/new" component={EntForm} />
					<div className="projects-list">
						{validDevProjectList && devProjectList.slice(0,5).map(projectData => {
							return(
                                <li> this is a project</li>
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
export default connect(mapStateToProps, {})(EntrepreneurApp)
