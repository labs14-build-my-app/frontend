import { cancelledBackground, cancelledGlow, cancelledText, trout, electricVioletLight, reviewGlow, reviewText } from '../../../cssVariables';

export const hasBeenRead = `
	.read-true{
		background: ${electricVioletLight};
		${reviewGlow};

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

		.date{
			color: ${cancelledText};
		}

		.info{
			color: ${trout};
		}
	}
`
