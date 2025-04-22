let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu and navbar on click
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Remove active class when scrolling
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};
