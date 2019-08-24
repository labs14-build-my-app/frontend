// Imports Background Colors
import {progressBackground, reviewBackground, updateBackground, cancelledBackground, completedBackground} from '../../../cssVariables';

// Imports Text Colors
import {progressText, reviewText, updateText, cancelledText, completedText} from '../../../cssVariables';

// imports Glows
import {progressGlow, reviewGlow, cancelledText, completedText} from '../../../cssVariables';

// Sets the text & background color
export const ProjectsButtonColorizer = `
.progress {
	background: ${progressBackground};
	color: ${progressText};
}

.review {
	background: ${reviewBackground};
	color: ${reviewText};

}

.update {
	background: ${updateBackground};
	color: ${updateText};
}

.cancelled {
	background: ${cancelledBackground};
	color: ${cancelledText};
}

.completed {
	background: ${completedBackground};
	color: ${completedText};
}
`

// Sets the glow color

export const projectGlowColorizer = `
`
