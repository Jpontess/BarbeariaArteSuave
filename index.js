const menu = document.querySelector(".navegacao-barra");
const buttonHeader = document.querySelector(".button-header");

menu.addEventListener("click", () => {
  buttonHeader.classList.toggle("aberto");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !buttonHeader.contains(e.target)) {
    buttonHeader.classList.remove("aberto");
  }
});

AOS.init({
  duration: 700, // duração de cada animação em ms
  once: true, // anima só uma vez ao entrar na tela
  easing: "ease-out-quart", // curva suave e elegante
});
