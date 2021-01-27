burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');

burger.addEventListener('click', ()=>
{
    navbar.classList.toggle('hid-resp');
    navlist.classList.toggle('vis-resp');
}
)