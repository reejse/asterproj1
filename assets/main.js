const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


function scrollHeader (){
    const header = document.getElementById('header')
    const shop = document.getElementById('cart-shop')
    const toggle = document.getElementById('nav-toggle')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    if(this.scrollY >= 50) shop.classList.remove('addwhite'); else shop.classList.add('addwhite')
    if(this.scrollY >= 50) toggle.classList.remove('addwhite'); else toggle.classList.add('addwhite')
}
window.addEventListener('scroll', scrollHeader)

