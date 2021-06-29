let navEl = document.querySelector('.page-navigation');

window.addEventListener('scroll', () => {
    navEl.classList[
        window.scrollY > 0
        ? 'add'
        : 'remove'
    ]('sticky');
});