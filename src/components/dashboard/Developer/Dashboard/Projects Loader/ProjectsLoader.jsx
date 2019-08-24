import React from 'react';

import styled from 'styled-components';
import {projectParagraphFont, projectFontSubtext} from '../../../cssVariables'; // Fonts
import {privilege, textColor1, textColor2} from '../../../cssVariables'; // Colors
import {projectsButtonColorizer, projectsGlowColorizer} from './ProjectsColorizer';

const ProjectsLoader = (props) => {
	return (
		<ProjectWrapper>
			<FlexWrapper className={'flex-wrapper-' + props.status}>
				<Left>
					<Row>
						<Img src={props.ownerProfilePicture} alt={"Profile picture of" + props.ownerName}/>
					</Row>

					<Row>
						<p className="main-text">{props.name || "N/A"}</p>
						<p className="title-text">{props.ownerName || "N/A"}</p>
					</Row>
				</Left>

				<Right>
					<Row>
						<p className="main-text">{props.startDate || "N/A"}</p>
						<p className="title-text">Start Date</p>
					</Row>

					<Row>
						<p className="main-text">{props.endDate || "N/A"}</p>
						<p className="title-text">Estimated End Date</p>
					</Row>

					<Row>
						<p className="main-text">{props.price || "N/A"}</p>
						<p className="title-text">Total Cost</p>
					</Row>

					<Row>
						<p className="main-text">{props.price * .25 || "N/A"}</p>
						<p className="title-text">Deposit</p>
					</Row>

					<Status>
						<div className={"status-wrapper " + props.status}>
							<p className="status-text">{props.status || "N/A"}</p>
						</div>
					</Status>
				</Right>

			</FlexWrapper>

		</ProjectWrapper>
	)
}
 
export default ProjectsLoader;

// This just aligns things to the center of the row. Its here for improved readibility.
const FlexAlignItemCenter = "display: flex; align-items: center;"
const border = "border: 1px solid red;"

const ProjectWrapper = styled.div`
	margin-bottom: 2.3rem;
	height: 10rem;
	max-width: 112.6rem;
${border}
	background: ${privilege};
	${projectsGlowColorizer}
`

const FlexWrapper = styled.div`
	${FlexAlignItemCenter}
	justify-content: space-between;
${border}
`
const Left = styled.div`
	${FlexAlignItemCenter}
`

const Right = styled.div`
	${FlexAlignItemCenter}

	Div:nth-child(4){
		background: gray;
		margin-right: 6rem;
	}


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
const Status = styled.div`
	margin-right: 3.9rem;

	.status-wrapper{
		border-radius: .5rem;
		padding: 1.7rem 0;
		width: 18rem;

		.status-text{
			text-align: center;
			font-size: ${projectFontSubtext};
			font-weight: bold;
		}
	}

	${projectsButtonColorizer};
`

const Img = styled.img`
	width: 54px;
	border-radius: 50%;
`
