function toggleMenu() {
  const mobileMenuContainer = document.querySelector("#mobile-menu-container");
  const mobileMenu = document.querySelector("#mobile-menu");
  mobileMenuContainer.classList.toggle("open");
  mobileMenu.classList.toggle("open");
}
