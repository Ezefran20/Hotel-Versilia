//NAVBAR
const hiddenMenu = document.querySelector('#toggle');
const openClose = document.querySelector('#open-close');

hiddenMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    openClose.classList.toggle('mobile-m');
})


//Animation
window.addEventListener('scroll', () => {
    const zfImg = document.getElementById('zoom-effect');
    const position = zfImg.getBoundingClientRect().top;
    const widthScreen = window.innerHeight/1.5;
    console.log(position);

    if (position < widthScreen) {
        zfImg.style.animation = 'zoomEffect linear 1.8s alternate'
    }
})