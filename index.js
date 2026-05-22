const menu = document.querySelector('.navegacao-barra');
const buttonHeader = document.querySelector('.button-header');

menu.addEventListener('click', () => {
  buttonHeader.classList.toggle('aberto');
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !buttonHeader.contains(e.target)) {
    buttonHeader.classList.remove('aberto');
  }
});
