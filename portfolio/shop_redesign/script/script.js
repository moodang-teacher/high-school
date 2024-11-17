document.querySelector(".ham").addEventListener("click", function () {
    document.querySelector(".submenu").classList.add("active");
});

document.querySelector(".submenu-close").addEventListener("click", function () {
    document.querySelector(".submenu").classList.remove("active");
});
