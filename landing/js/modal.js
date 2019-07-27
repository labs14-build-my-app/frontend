//DOM elements
const modal = document.querySelector(".hamburger-modal");
const nav = document.querySelector(".modal-nav-elements");
const hamburger = document.querySelector(".hamburger-svg");

//css
const modalCSS = ["blur(3px) brightness(35%)", ""]
const navCSS = ["none", "flex"]

const displayModal = (e) => {
console.log(e.target);
console.log(hamburger.style);
modal.style.filter =  modalCSS[0];

nav.style.display = navCSS[1];
hamburger.style.display = navCSS[0]

nav.addEventListener("click", removeModal);
hamburger.removeEventListener("click")

}
const removeModal = (e) =>{
    modal.style.filter = modalCSS[1];
    nav.style.display = navCSS[0];
    hamburger.style.display = navCSS[1];
    
    navCSS.removeEventListener("click");
}

hamburger.addEventListener("click", displayModal);

//on click, hamburger menu displays none.
//Close button displays from hamburger and div 
//home-navigation-bar displays
