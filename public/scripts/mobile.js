const mobileMenuBtnElement = document.getElementById("mobile-menu-btn");
const mobileMenuElement = document.getElementById("mobile-menu");
const mobileMenuBtnIconElement = document.querySelector("i");

function toggleMobileMenu() {
  mobileMenuElement.classList.toggle("open");
}

mobileMenuBtnElement.addEventListener("click", toggleMobileMenu);
