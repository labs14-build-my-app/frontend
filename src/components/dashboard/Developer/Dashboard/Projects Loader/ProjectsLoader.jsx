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
				<div className="row">
					<Img src={props.ownerProfilePicture} alt={"Profile picture of" + props.ownerName}/>
				</div>

				<div className="row">
					<p className="main-text">{props.name}</p>
					<p className="title-text">{props.ownerName}</p>
				</div>

				<div className="row">
					<p className="main-text">{props.startDate}</p>
					<p className="title-text">Start Date</p>
				</div>

				<div className="row">
					<p className="main-text">{props.endDate}</p>
					<p className="title-text">End Date</p>
				</div>
			</div>

			<p> {props.name} </p>
			<p> {props.ownerName}</p>

			<p> {props.price} </p>
			<p> {props.status} </p>
		</div>
	)
}
 
export default ProjectsLoader;
