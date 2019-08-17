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
export const tablet = "(max-width: 900px)"; //idk what this is i need to google it

//GENERAL FONT SIZES
export const headerFontDesktop = "1.8rem";
export const h1 = "5.5rem";
export const headerFontFamily = "Source Sans Pro";
export const headerFontWeight = "normal";

// Login & Signup Specific Fonts
export const losLinks = "2.5rem";
export const losTransitionTime = "0.4s"


//<ProjectBoard /> specific fonts
export const projectFontSubtext = "1.3rem";
export const projectParagraphFont = "1.5rem";

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
