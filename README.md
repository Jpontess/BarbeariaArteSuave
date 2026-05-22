# Barbearia Arte Suave — Site Institucional

Site institucional da **Barbearia Arte Suave**, desenvolvido com HTML, CSS e JavaScript puro, seguindo a abordagem **mobile first**.

---

## Estrutura de Arquivos

```
barbearia-arte-suave/
│
├── index.html
├── index.js
│
├── style/
│   ├── style.css        # Estilos principais (mobile first)
│   ├── header.css       # Header e menu hambúrguer
│   ├── titulo.css       # Hero (imagem principal + h1 sobreposto)
│   └── footer.css       # Footer
│
└── img/
    ├── logo.png
    ├── barra.png
    ├── IMG PRINCIPAL.png
    ├── img 1.png
    ├── img 2.png
    ├── img 3.png
    ├── image 4.png
    ├── image 8.png
    └── image 34.png
```

---

## Seções da Página

- **Header** — Logo + menu hambúrguer (mobile) / links (desktop)
- **Hero** — Imagem principal com título sobreposto
- **Nossa Maestria** — Cards com serviços da barbearia
- **Mestres da Navalha** — Cards com fotos da equipe
- **Localização e Contato** — Google Maps + endereço e botões de agendamento
- **Depoimentos** — Widget Elfsight com avaliações do Google
- **Footer** — Links de navegação + redes sociais

---

## Tecnologias

- HTML5
- CSS3 (mobile first, Flexbox, `clamp()`, media queries)
- JavaScript puro (ES6+)
- [Elfsight](https://elfsight.com/) — widget de avaliações

---

## Abordagem Mobile First

O CSS é escrito primeiro para mobile (sem `@media`), e expandido para telas maiores com `@media (min-width: ...)`:

| Breakpoint | Largura |
|---|---|
| Mobile (base) | 0px — 599px |
| Tablet | 600px+ |
| Desktop | 960px+ |

---

## Funcionalidades JavaScript (`index.js`)

### Menu hambúrguer
Abre e fecha o menu no mobile ao clicar no ícone de barras. Fecha automaticamente ao clicar fora.

```javascript
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
```

### Logo clicável
Ao clicar na logo, a página rola suavemente para o topo.

```javascript
const logo = document.querySelector('.header-logo');

logo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

---

## Navegação por âncoras

Os links do menu e do footer usam âncoras HTML para rolar suavemente até cada seção:

| Link | Âncora |
|---|---|
| Home | `#home` (no `<body>`) |
| Contato | `#contato` |
| Depoimentos | `#depoimentos` |

A rolagem suave é ativada via CSS:

```css
html {
  scroll-behavior: smooth;
}
```
---

## Como executar

Basta abrir o `index.html` no navegador. Nenhuma dependência ou instalação necessária.

Para testar o comportamento mobile, use o **DevTools do navegador** (`F12`) e ative o modo responsivo.

---

## Paleta de cores

| Cor | Hex | Uso |
|---|---|---|
| Dourado | `#d4af37` | Títulos, cards, destaques |
| Preto principal | `#0c0c0c` | Fundo do body |
| Preto card | `#1a1a1a` | Fundo seção depoimentos |
| Preto footer | `#080808` | Fundo do footer |
| Azul agendamento | `#00395F` | Botão AppBarber |
| Verde WhatsApp | `#25D366` | Botão WhatsApp |
