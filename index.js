function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("ativo");
}

// Fechar o menu ao clicar em qualquer link dentro dele
document.querySelectorAll(".menu li a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".menu").classList.remove("ativo");
    });
});