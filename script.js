let menu = document.querySelector('#mobile_menu');
let menuLinks = document.querySelector('.navbar_menu');
let navLogo = document.querySelector("#navbar_logo")
let mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click',mobileMenu)

// show active menu when scrolling






