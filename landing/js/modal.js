//DOM elements
const modal = document.querySelector(".hamburger-modal");
const mobileNav = document.querySelector(".modal-nav-elements");
const hamburger = document.querySelector(".hamburger-svg");

const desktopNav = hamburger.parentNode.querySelector("nav");
const introGetStarted = document.querySelector('.cta-getstarted-section').querySelector('h2');

const closeButtonSrc = "./assets/svgs/icon_close.svg";
const hamburgerButtonSrc = "./assets/svgs/icon_Menu.svg";
//css
const mobileModalCSS = ["blur(3px) brightness(35%)", ""]
const mobileNavCSS = ["none", "flex"]
//end css
const desktopNavCSS = ["none", "flex"];

const opacityAnimationDuration = 300;//milliseconds

const displayNav = (e) => {

const isMobile = window.getComputedStyle(introGetStarted, null).getPropertyValue("font-size")==="23px";

    if(isMobile){  
        modal.style.filter =  mobileModalCSS[0];
        mobileNav.addEventListener("click", removeNav);
        mobileNav.style.display = mobileNavCSS[1];
        hamburger.style.display = mobileNavCSS[0];
        hamburger.parentElement.children[0].style.display = mobileNavCSS[0];
       
        
        window.addEventListener("scroll", preventScroll);
    }
    else{
       
        desktopNav.style.display = desktopNavCSS[1];
        hamburger.src = closeButtonSrc;
        hamburger.parentElement.children[1].textContent = "CLOSE";
        hamburger.removeEventListener("click", displayNav);
        hamburger.addEventListener("click", removeNav);
        
        hamburger.parentElement.classList.add("displayNavAnime");
        setTimeout(removeAnimation, opacityAnimationDuration);
    }




}
const removeNav = (e) =>{


    const isMobile = window.getComputedStyle(introGetStarted, null).getPropertyValue("font-size")==="23px";
        if(isMobile){
            modal.style.filter = mobileModalCSS[1];
            mobileNav.style.display = mobileNavCSS[0];
            hamburger.style.display = mobileNavCSS[1];
            hamburger.parentElement.children[0].style.display = mobileNavCSS[1];
            window.removeEventListener("scroll", preventScroll);
        }
        else{
            
            hamburger.src = hamburgerButtonSrc;
            desktopNav.style.display = desktopNavCSS[0];
            hamburger.parentElement.children[1].textContent = "MENU"

            hamburger.parentElement.classList.add("displayNavAnime")
            
            hamburger.removeEventListener("click", removeNav);
            hamburger.addEventListener("click", displayNav);

            setTimeout(removeAnimation, opacityAnimationDuration);
        }

}

const removeAnimation = () =>{
    hamburger.parentElement.classList.remove("displayNavAnime");
}


const preventScroll = (e) =>{
    window.scrollTo(1,1);
}

hamburger.addEventListener("click", displayNav);

