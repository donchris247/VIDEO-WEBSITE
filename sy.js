const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchButton.addEventListener("click", function() {
  searchBar.classList.toggle("visible");
  searchInput.focus();
});

searchInput.addEventListener("input", function() {
  searchResults.classList.add("visible");
});

document.addEventListener("click", function(event) {
  if (!searchBar.contains(event.target)) {
    searchResults.classList.remove("visible");
  }
});
