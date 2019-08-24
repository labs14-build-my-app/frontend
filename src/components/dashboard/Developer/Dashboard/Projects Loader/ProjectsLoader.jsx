import React from 'react';

import styled from 'styled-components';
import {projectParagraphFont, projectFontSubtext} from '../../../cssVariables'; // Fonts
import {privilege, textColor1, textColor2} from '../../../cssVariables'; // Colors

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
max-width: 112.6rem;

`

const FlexWrapper = styled.div`
	${FlexAlignItemCenter};
	justify-content: space-between;
	padding: 2.3rem 4rem 2.3rem;
	background: ${privilege};
	border: 1px solid pink;
`
const Left = styled.div`
	${FlexAlignItemCenter}
	border: 1px solid green;
	Div:nth-child(2) {
		margin-left: 3rem;
	}
`

const Right = styled.div`
	${FlexAlignItemCenter}
	border: 1px solid red;
`

const Row = styled.div`
	.main-text {
		font-size: ${projectParagraphFont};
		color: ${textColor1};
	}

	.title-text{
		font-size: ${projectFontSubtext};
		color: ${textColor2};
	}
`
const Img = styled.img`
	width: 54px;
	border-radius: 50%;
`
