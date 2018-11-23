// DOM Items
const menuBTn = document.querySelector('.menu-btn');
const menuBranding = document.querySelector('.menu-branding');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');

const navItems = Array.from(document.querySelectorAll('.nav-item'));

// Set initial state of menu

let showMenuState = false;

menuBTn.addEventListener("click", toggleMenu);

function toggleMenu(){
    if (!showMenuState){
        menuBTn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        // in case of ERROR check array.from above
        navItems.forEach(el => el.classList.add('show'));
        showMenuState = true;
    } else {
        menuBTn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        // in case of ERROR check array.from above
        navItems.forEach(el => el.classList.remove('show'));
        showMenuState = false;
    }
}