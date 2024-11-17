function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "block";
        btn1.style.display = "none";
        btn2.style.display = "inline-block";
    } else {
        mobileMenu.style.display = "none";
        btn1.style.display = "inline-block";
        btn2.style.display = "none";
    }
}
