document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-menu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');

    menuButton.addEventListener('click', () => {
        fullscreenMenu.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
    });
}); 

