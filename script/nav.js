let navEl = document.querySelector('.page-navigation');

window.addEventListener('scroll', () => {
    navEl.classList[
        window.scrollY > 0
        ? 'add'
        : 'remove'
    ]('sticky');
});

let navHiderEl  = document.querySelector('.page-navigation .nav-hider');
let menuHiderEl = document.querySelector('.page-navigation .nav-menu .menu-hider');

function toggle_nav() {
    navEl.classList.toggle('open');
    document.querySelector('body').classList.toggle('no-scrolling');
}

navHiderEl.addEventListener('click', () => toggle_nav());
menuHiderEl.addEventListener('click', () => toggle_nav());