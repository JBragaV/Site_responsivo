const hamburger = document.querySelector(".menu-hamburger");
const nav = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
    // Alterna a classe 'active' no menu e no botão
    hamburger.classList.toggle("menu-hamburger--active");
    nav.classList.toggle("nav__list--active");
});

// Opcional: Fechar o menu ao clicar em um link
document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("menu-hamburger--active");
        nav.classList.remove("nav__list--active");
    });
});
