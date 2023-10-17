let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolar para baixo
        header.style.top = '-100px'; // Altere para a altura do seu cabeçalho
    } else {
        // Rolar para cima
        header.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
