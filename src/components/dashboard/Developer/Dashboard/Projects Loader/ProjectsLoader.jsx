import React from 'react';

import styled from 'styled-components';
import {privilege} from '../../../cssVariables';

const ProjectsLoader = (props) => {
	return (
		<ProjectWrapper>

			<FlexWrapper>
				<Left>
					<Row>
						<Img src={props.ownerProfilePicture} alt={"Profile picture of" + props.ownerName}/>
					</Row>

					<Row>
						<p className="main-text">{props.name}</p>
						<p className="title-text">{props.ownerName}</p>
					</Row>
				</Left>

				<Right>
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
				</Right>

			</FlexWrapper>

		</ProjectWrapper>
	)
}
 
export default ProjectsLoader;

// This just aligns things to the center of the row. Its here for improved readibility.
const FlexAlignItemCenter = " display: flex; align-items: center;"

const ProjectWrapper = styled.div`
`

const FlexWrapper = styled.div`
	background: ${privilege};
	${FlexAlignItemCenter}
`
const Left = styled.div`
	${FlexAlignItemCenter}
	margin: 2.3rem 4rem 2.3rem;
`

const Right = styled.div`
	${FlexAlignItemCenter}	
`

const Row = styled.div`

`
const Img = styled.img`
	width: 54px;
	border-radius: 50%;
`
