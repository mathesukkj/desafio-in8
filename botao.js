const toTop = document.querySelector(".botao-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400 && window.scrollY < 1550) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
