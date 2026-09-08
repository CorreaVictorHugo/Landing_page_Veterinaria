// Elementos usados para abrir e fechar o menu no celular.
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-menu");

// Ao clicar no botao hamburguer, alterna a classe que mostra o menu.
menuButton?.addEventListener("click", () => {
  const isOpen = menu?.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

// Ao clicar em um link do menu, fecha o menu mobile automaticamente.
menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});
