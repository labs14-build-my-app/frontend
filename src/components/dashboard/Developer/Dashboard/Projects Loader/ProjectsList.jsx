import React, { Component } from 'react';
import ProjectsLoader from './ProjectsLoader';

import {tempstate} from './tempstate';

// This is a HOC which takes in an array of projects a signed in developer has.
// It then gets passed to ProjectsLoader.jsx as props so it can be returned and rendered on the the Projects List

class ProjectsList extends Component {

	state = {tempstate}

	render() { 
		return (
			<div className="projects-list">
				Projects List lives here <br/>
				<ProjectsLoader />
			</div>
		);
	}
}
 
export default ProjectsList;
