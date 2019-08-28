import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import styled from "styled-components"
import { connect } from "react-redux"
// Reverted

import PageRenderer from './PageRenderer'
import CreateProjectFrom from './CreateProject/CreateProjectForm'

const EntAppContainer = styled.div`
    padding: 4rem 11.2rem 10.6rem 6.9rem;
`

const EntrepreneurApp = (props) => {
	const { pathname } = props;

	//devProjectList to entrepreneurProjectList 
	//change pathname === "/dev/home" to "/entrepreneur/home"
	//change fetchSelfProjects to fetchOwnerProjects or something

	// useEffect(() => {
	// 	if (pathname === "/dev/home") {
	// 		fetchEntProjects();
	// 	}
	// }, [pathname])

	return (
		<EntAppContainer>
			{pathname === "/" && <Redirect to="/ent/home" />}

			<Route path="/ent/home" render={() => {
				return (
					<div className="entrepreneur-home">
						<PageRenderer {...props} />
					</div>
				)
			}} />

			<Route path="/ent/projects/new" render={() => {
				return (
					<div className="entrepreneur-projects-new">
						<PageRenderer {...props} />
					</div>
				)
			}} />
		</EntAppContainer>
	)
}

const mapStateToProps = (state) => {
	console.log(state);

	return {
		entProjectList: state.entProjectList
	};
}
export default connect(mapStateToProps, {})(EntrepreneurApp)
