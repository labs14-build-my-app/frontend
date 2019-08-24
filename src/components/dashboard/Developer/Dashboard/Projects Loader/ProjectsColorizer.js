// Imports Background Colors
import {progressBackground, reviewBackground, updateBackground, cancelledBackground, completedBackground} from '../../../cssVariables';

// Imports Text Colors
import {progressText, reviewText, updateText, cancelledText, completedText} from '../../../cssVariables';

// imports Glows
import {progressGlow, reviewGlow, updateGlow, cancelledGlow, completedGlow} from '../../../cssVariables';

// Sets the text & background color
export const projectsButtonColorizer = `
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

export const projectsGlowColorizer =`
.flex-wrapper-progress {
	${progressGlow}
}

.flex-wrapper-review {
	${reviewGlow}
}

.flex-wrapper-update {
	${updateGlow}
}

.flex-wrapper-cancelled {
	${cancelledGlow}
}

.flex-wrapper-completed {
	${completedGlow}
}
`
