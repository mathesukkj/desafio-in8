const toTop = document.querySelector(".botao-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 650 && window.scrollY < 1850) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
