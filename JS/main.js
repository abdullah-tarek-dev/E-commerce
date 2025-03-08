// Close Top Bar
function closeBtn() {
  const topBar = document.querySelector(".top-bar");
  topBar.classList.add("closing");
  setTimeout(() => {
    topBar.style.display = "none";
  }, 1000);
}

document.getElementById("closeTopBar").addEventListener("click", closeBtn);

// Mobile Menu Toggle
const menuIcon = document.getElementById("menuIcon");
const mainNav = document.getElementById("mainNav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  mainNav.classList.toggle("active");
});

// Search Icon Toggle
const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");

searchIcon.addEventListener("click", () => {
  searchIcon.classList.toggle("active");
  searchBar.classList.toggle("active");
});
// Up Button
const upBtn = document.getElementById("topBarButton");

function toggleUpBtn() {
  if (window.scrollY === 0) {
    upBtn.style.display = "none";
  } else {
    upBtn.style.display = "block";
  }
}

window.addEventListener("scroll", toggleUpBtn);
window.addEventListener("load", toggleUpBtn);

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
