import React, { Component } from 'react';

import styled from 'styled-components';
import { renderComponent } from 'recompose';

const Img = styled.img`
width: 50px;
`

const ProjectsLoader = (props) => {
	return (
		<div className="project">

			<div className="flex-wrapper">
				<div className="row"></div>
				<div className="row"></div>
				<div className="row"></div>
				<div className="row"></div>
				<div className="row"></div>
			</div>
			
			<Img src={props.ownerProfilePicture} alt="I promise this person doesnt exist"/>
			<p> {props.name} </p>
			<p> {props.ownerName}</p>

			<p> {props.price} </p>
			<p> {props.status} </p>
		</div>
	)
}
 
export default ProjectsLoader;
