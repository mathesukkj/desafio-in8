//? BOTÃO TOPO

const toTop = document.querySelector(".botao-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400 && window.scrollY < 1750) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

//? BOTÃO MENU MOBILE

const mobileMenu = document.querySelector("#btn-mobile");
const mobileMenu2 = document.querySelector("#btn-mobile2");
function toggleMenu() {
    const nav = document.querySelector("#nav");
    nav.classList.toggle("active");
}

mobileMenu.addEventListener("click", toggleMenu);
mobileMenu2.addEventListener("click", toggleMenu);
