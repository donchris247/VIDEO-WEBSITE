const searchContainer = document.querySelector(".home");
const homeSearch = document.querySelector(".home search");


document.addEventListener("DOMContentLoaded", () => {

    homeSearch.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "/index.html#";

    })

});