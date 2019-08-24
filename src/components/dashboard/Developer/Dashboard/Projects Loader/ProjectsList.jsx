import React, { useState } from 'react';
import ProjectsLoader from './ProjectsLoader';

import {tempstate} from './tempstate';

const ProjectsList = () =>{
	const [devProjectList] = useState(tempstate.devProjectList);
	return(
		<div>
			{devProjectList.slice(0,1).map(projectData => {
				return(
					<ProjectsLoader {...projectData} />
				)
			})}
		</div>
	)
}
/*

*/

export default ProjectsList;
