const searchBtn = document.querySelector(".search-btn");
const searchContainer = document.querySelector(".search-container");
const searchSubmit = document.getElementById("search-submit");
const searchBar = document.querySelector(".search-bar");

searchBtn.addEventListener("click", function (e) {
  const btnRect = searchBtn.getBoundingClientRect();
  searchContainer.style.top = `${btnRect.top}px`;
  searchContainer.style.left = `${btnRect.left}px`;
  searchContainer.classList.toggle("open");
  e.stopPropagation();
});

document.body.addEventListener("click", function (e) {
  if (!searchBar.contains(e.target) && !searchContainer.contains(e.target)) {
    searchContainer.classList.remove("open");
  }
});

searchSubmit.addEventListener("click", function (e) {
  // Add your search functionality here
  // For demonstration purposes, let's just log the search term
  const searchTerm = searchBar.value;
  console.log("Search Term:", searchTerm);
  e.stopPropagation();
});
//login
function popup() {
  document.getElementById("page").style.display = "flex";
}
function popclose() {
  document.getElementById("page").style.display = "none";
}
