// // Get references to the hamburger icon and nav menu
// const hamburgerIcon = document.getElementsByClassName('hamburger');
// const navMenu = document.getElementsByClassName('menu');

// // Toggle the 'active' class to show/hide the menu
// hamburgerIcon.addEventListener('click', () => {
//   navMenu.classList.toggle('open');
// });

function toggleMenu(x) {
  x.classList.toggle("change");
  document.getElementById("mainMenu").classList.toggle("show-menu");
}
