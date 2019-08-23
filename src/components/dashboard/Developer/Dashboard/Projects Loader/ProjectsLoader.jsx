import React from 'react';

import styled from 'styled-components';

const ProjectsLoader = (props) => {
	return (
		<div className="project">

			<FlexWrapper>
				<Row>
					<Img src={props.ownerProfilePicture} alt={"Profile picture of" + props.ownerName}/>
				</Row>

				<Row>
					<p className="main-text">{props.name}</p>
					<p className="title-text">{props.ownerName}</p>
				</Row>

				<Row>
					<p className="main-text">{props.startDate}</p>
					<p className="title-text">Start Date</p>
				</Row>

				<Row>
					<p className="main-text">{props.endDate}</p>
					<p className="title-text">Estimated End Date</p>
				</Row>

				<Row>
					<p className="main-text">{props.price}</p>
					<p className="title-text">Total Cost</p>
				</Row>

				<Row>
					<p className="main-text">{props.price * .25}</p>
					<p className="title-text">Deposit</p>
				</Row>
				
				<Row>
					<div className="status">
						<p className="status-text">{props.status}</p>
					</div>
				</Row>
			</FlexWrapper>
		</div>
	)
}
 
export default ProjectsLoader;

const FlexWrapper = styled.div`
border: 1px solid red;
display: flex;
`
const Row = styled.div`
border: 1px solid green;
`

const Img = styled.img`
width: 54px;
border-radius: 50%;
`
