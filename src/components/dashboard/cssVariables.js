/*
ATTENTION ALL GAMERS
use http://chir.ag/projects/name-that-color/#9519E8 
to name your colors. Thanks for coding responsively.
*/
//CSS COLORS
export const sunglow = "#FFDC2B";
export const sunglowLight = "#FFF9D9";
export const sunglowText = "#C2A721";

export const shamrock = "#25DA95";
export const shacmrockLight = "#D9FFDD";
export const shamrockText = "#3D9E47";

export const electricViolet = "#9519E8";
export const electricVioletLight = "#E2E0FF";
export const electricVioletText = "#6C63FF";

export const trout = "#4D4F5C";
export const gunPowder = "#43425D";
export const privilege = "#fff"

// NEW CSS COLORS
export const textColor1 = "#43425D";
export const textColor2 = "#9592A8";
export const veryLightBlue = "#F2F3FF";

// Colors Used for Project Status's On The Dashboard
export const progressBackground = "#D9FFDD";
export const progressText = "#3D9E47";
export const progressGlow = "box-shadow: 5px 5px 8px rgba(217, 255, 221, 0.25);";

export const reviewBackground = "#E2E0FF";
export const reviewText = "#6C63FF"
export const reviewGlow = "box-shadow: 5px 5px 8px rgba(226, 224, 255, 0.25);"

export const updateBackground = "#FFF9D9";
export const updateText = "#C2A721"
export const updateGlow = "box-shadow: 5px 5px 8px rgba(255, 249, 217, 0.25);";

export const cancelledBackground = "#FFB3B3";
export const cancelledText = "#AD7979"
export const cancelledGlow = "box-shadow: 5px 5px 8px rgba(255, 217, 217, 0.25);";

export const completedBackground = "#F2F3FF";
export const completedText = "#828CFF";
export const completedGlow = "box-shadow: 5px 5px 8px rgba(242, 243, 255, 0.25);"

//sets lighter color than the main above
export const setColorAndOpacity = (color, opacity) => {
  switch (color) {
    case electricViolet:
      return `rgba(217, 255, 221, ${opacity})`;
    case shamrock:
      return `rgba(37, 218, 149, ${opacity})`;
    case sunglow:
      return `rgba(255, 249, 217, ${opacity})`;
    case sunglowLight:
      return `rgba(255, 249, 217, ${opacity})`;
    case electricVioletLight:
      return `rgba(226, 224, 255, ${opacity})`;
    default:
      return "";
  }
};

//MEDIA QUERIES
export const phone = "(max-width: 375px)";
export const macbook = "(max-width: 1680px)";
export const tablet = "(max-width: 900px)";

//GENERAL FONT SIZES
export const headerFontDesktop = "1.8rem";
export const h1 = "5.5rem";
export const headerFontFamily = "Source Sans Pro";
export const headerFontWeight = "normal";

// Login & Signup Specific Fonts
export const losLinks = "2.5rem";
export const losTransitionTime = "0.4s"


//<ProjectBoard /> specific fonts
export const projectParagraphFont = "1.5rem";
export const projectFontSubtext = "1.3rem";

//Transparent Backdrop
export const transparentBackdrop = `
position: relative;
box-shadow: 5px 5px 8px 0px rgba(255,255,255,0.16);
::before{
 content: "";
 position: absolute;
 top: 0; left: 0;
 width: 100%; height: 100%;
 background: white;
 filter: blur(0px) brightness(150%) opacity(35%);
 border-radius: 10px;
 z-index: -10;
}`;

// gradient overlay for login & signup page
export const losBackground = `
	background:
	linear-gradient(61deg, rgba(24, 7, 94, .7), rgba(149, 25, 232, .7)),
	url('${process.env.PUBLIC_URL + "/images/heros/login-signup-hero.jpg"}');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`

// LeftNav, TopNav, MainApp gradients.
export const leftNavGradient = ``;
export const topNavGradient = ``;
export const mainAppGradient = ` background: transparent linear-gradient(297deg, rgba(242, 243, 255, 1) 0%, rgba(255, 255, 255, 1) 100%) 0% 0% no-repeat padding-box; `;
