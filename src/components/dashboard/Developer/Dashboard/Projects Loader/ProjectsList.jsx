import React, { Component } from 'react';
import ProjectsLoader from './ProjectsLoader';

class ProjectsList extends Component {
	render() { 
		return (
			<div className="">
				Projects List lives here <br/>
				<ProjectsLoader />
			</div>
		);
	}
}
 
export default ProjectsList;
