const openNav = document.getElementById("openNav"),
    closeNav = document.getElementById("closeNav"),
    topNav = document.getElementById("topNav"),
    pageShade = document.getElementById("pageShade");

document.addEventListener("click", (e) => {
    if (e.target === openNav || e.target === closeNav) {
        topNav.classList.toggle("top-nav--open");
        pageShade.classList.toggle("shade--active");
    } else if (topNav.classList.contains("top-nav--open")) {
        topNav.classList.toggle("top-nav--open");
        pageShade.classList.toggle("shade--active");
    }
});