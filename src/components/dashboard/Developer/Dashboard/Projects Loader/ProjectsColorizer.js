// These are the styles for a project dependent upon the passed in state.

import {progressBackground, reviewBackground, updateBackground, cancelledBackground, completedBackground} from '../../../cssVariables';

export const ProjectsButtonColorizer = `
.progress {
	background: ${progressBackground};
}

.review {
	background: ${reviewBackground};
}

.update {
	background: ${updateBackground};
}

.cancelled {
	background: ${cancelledBackground};
}

.completed {
	background: ${completedBackground};
}
`
