//DOM elements
const modal = document.querySelector(".hamburger-modal");
const nav = document.querySelector(".modal-nav-elements");
const hamburger = document.querySelector(".hamburger-svg");

//css
const modalCSS = ["blur(3px) brightness(35%)", ""]
const navCSS = ["none", "flex"]
//end css


const displayModal = (e) => {
modal.style.filter =  modalCSS[0];

nav.style.display = navCSS[1];
hamburger.style.display = navCSS[0];
hamburger.parentElement.children[0].style.display = navCSS[0];
nav.addEventListener("click", removeModal);
window.addEventListener("scroll", preventScroll);


}
const removeModal = (e) =>{
    modal.style.filter = modalCSS[1];
    nav.style.display = navCSS[0];
    hamburger.style.display = navCSS[1];
    hamburger.parentElement.children[0].style.display = navCSS[1];
    window.removeEventListener("scroll", preventScroll);
}


const preventScroll = (e) =>{
    window.scrollTo(1,1);
}

hamburger.addEventListener("click", displayModal);
window.addEventListener("scroll", preventScroll);

