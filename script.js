// script.js

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const links = document.querySelectorAll(".nav__link");

  // Toggle menu open/close
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("nav__toggle--active");
    menu.classList.toggle("nav__menu--open");
    document.body.classList.toggle("no-scroll");
  });

  // Close menu when a link is clicked
  links.forEach((link) => {
    link.addEventListener("click", () => {
      // Only close if it's open (mobile view)
      if (menu.classList.contains("nav__menu--open")) {
        menu.classList.remove("nav__menu--open");
        toggle.classList.remove("nav__toggle--active");
      }
    });
  });
});

/*
nav__menu--open controls visibility.
Clicking a link removes that class → the menu collapses.
Once it’s closed, the page can scroll to your anchor (like #projects, #contact, etc.).
*/

/* =============== Show Menu =============== 
const showMenu = (toggleId, menuId) => {
  const navToggle = document.getElementById(toggleId);
  const navMenu = document.getElementById(menuId);

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    navToggle.classList.toggle("nav__toggle--active");
  });
};

showMenu("nav-toggle", "nav-menu"); */
