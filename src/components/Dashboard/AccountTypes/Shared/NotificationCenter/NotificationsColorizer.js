import { cancelledBackground, cancelledGlow, cancelledText, trout, electricVioletLight, reviewGlow, reviewText } from '../../../cssVariables';

export const hasBeenRead = `
	.read-true{
		background: ${electricVioletLight};
		${reviewGlow};

		.bubble{
			display: none;
		}

		.date{
			color: ${reviewText};
		}

		.info{
			color: ${trout}
		}
	}
`
export const hasNotBeenRead = `
	.read-false{
		background: ${cancelledBackground};
		${cancelledGlow};

		.bubble{
			height: 1.2rem;
			width: 1.2rem;
			border-radius: 50%;
			background: red;
			position: relative;
			float: right;
			top: -2rem;
			right: -3rem;
		}

		.date{
			color: ${cancelledText};
		}

		.info{
			color: ${trout};
		}
	}
`
