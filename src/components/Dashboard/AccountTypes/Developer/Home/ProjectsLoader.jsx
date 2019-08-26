import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';
import {projectParagraphFont, projectFontSubtext} from '../../../cssVariables'; // Fonts
import {privilege, textColor1, textColor2} from '../../../cssVariables'; // Colors
import {projectsButtonColorizer, projectsGlowColorizer} from './ProjectsColorizer';

const ProjectsLoader = (props) => {
	const { name, ownerName, description, _id, status,createdAt, price } = props
	console.log(props)
	const startDate = new Date(createdAt);
	const endDate = (date, days) => {
		let result = new Date(date);
		result.setDate(result.getDate() + days);
		return result; 
	  };

	return (
		<ProjectWrapper>
			<Link to={{
				pathname: `/dev/find/projects/${_id}`, 
				state : {
					name: name,
                    ownerName: ownerName,
                    description: description,
                    id: _id
				}}} style={{ textDecoration: 'none', color: 'inherit'}} >
			<FlexWrapper className={'flex-wrapper-' + props.status}>
				<Left>
					<Row>
						<Img src="https://thispersondoesnotexist.com/image" alt={"Profile picture of" + ownerName}/>
					</Row>

					<Row>
						<p className="main-text">{name || "N/A"}</p>
						<p className="title-text">{ownerName || "N/A"}</p>
					</Row>
				</Left>

				<Right>
					<Row>
						<p className="main-text">{endDate(startDate, 30).toLocaleDateString() || "N/A"}</p>
						<p className="title-text">Start Date</p>
					</Row>

					<Row>
						<p className="main-text">{"N/A"}</p>
						<p className="title-text">Estimated End Date</p>
					</Row>

					<Row>
						<p className="main-text">${price || "N/A"}</p>
						<p className="title-text">Total Cost</p>
					</Row>

					<Row>
						<p className="main-text">${price * .25 || "N/A"}</p>
						<p className="title-text">Deposit</p>
					</Row>

					<Row>
						<div className={"status-wrapper " + status}>
							<p className="status-text">{status || "N/A"}</p>
						</div>
					</Row>
				</Right>
				
			</FlexWrapper>
			</Link>
		</ProjectWrapper>
	)
}
 
export default ProjectsLoader;

// This just aligns things to the center of the row. Its here for improved readibility.
const FlexAlignItemCenter = " display: flex; align-items: center;"

const ProjectWrapper = styled.div`
	min-width: 112.6rem;
	max-height: 10rem;
	background: ${privilege};
	border-radius: .5rem;
	margin-bottom: 2.375rem;
	margin-right: 4rem;
	${projectsGlowColorizer}
`

const FlexWrapper = styled.div`
	${FlexAlignItemCenter};
	justify-content: space-between;
	padding: 2.3rem 4rem 2.3rem;
`
const Left = styled.div`
	${FlexAlignItemCenter}
	Div:nth-child(2) {
		margin-left: 3rem;
	}
`

const Right = styled.div`
	${FlexAlignItemCenter}
	Div{
		margin-left: 4.5rem;
	}
`

const Row = styled.div`
	.main-text {
		font-size: ${projectParagraphFont};
		color: ${textColor1};
		margin-bottom: .5rem;
	}
	.title-text{
		font-size: ${projectFontSubtext};
		color: ${textColor2};
	}
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
