import React, { useState } from 'react';
import ProjectsLoader from './ProjectsLoader';

import {tempstate} from './tempstate';

// This is a HOC which takes in an array of projects a signed in developer has.
// It then gets passed to ProjectsLoader.jsx as props so it can be returned and rendered on the the Projects List

const ProjectsList = () =>{
const [devProjectList, setDevProjectList] = useState(tempstate.devProjectList);
return(
	<div>
		{devProjectList.map(project=>{
			return(<li>Project stuff</li>)
		})}
	</div>
)
}

export default ProjectsList;
