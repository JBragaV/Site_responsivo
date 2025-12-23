const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    // Alterna a classe 'active' no menu e no botão
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

// Opcional: Fechar o menu ao clicar em um link
document.querySelectorAll(".nav-list li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
    });
});
