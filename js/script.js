// Toggle Class Active untuk Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
// ketika shopping cart diklik
document.querySelector("#shopping-cart-button").onclick = () => {
  shoppingCart.classList.toggle("active");
};

//Klik di luar elemen

const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
document.addEventListener("click", function (e) {
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box Item Detail
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((button) => {
  button.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});
// Close Modal Box
const closeIcon = document.querySelector(".close-icon");
closeIcon.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
// klik di luar modal untuk menutupnya
window.onclick = (event) => {
  if (event.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
