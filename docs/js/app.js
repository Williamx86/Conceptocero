var boton = document.querySelector(".btn_abrir");
var menu = document.querySelector(".menu_movil");

boton.addEventListener("click", activarmenu);

function activarmenu() {
    menu.classList.toggle("oculto");
}

var hecho = 1;

var hecho_dos = 1;

var hecho_tres = 1;

function animateValue(obj, start, end, duration, si) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
    hecho = si;
}

const obj = document.getElementById("value");

window.addEventListener('scroll', function () {
    let animacion = document.getElementById('animado');
    let posicion = animacion.getBoundingClientRect().top;
    let pantalla = window.innerHeight / 1.5;

    if (posicion < pantalla && hecho != 0) {
        animateValue(obj, 50, 1403, 1500, 0);
        console.log(hecho);
    }
})

const obje = document.getElementById("value_dos");

window.addEventListener('scroll', function () {
    let animacion = document.getElementById('animado');
    let posicion = animacion.getBoundingClientRect().top;
    let pantalla = window.innerHeight / 1.5;

    if (posicion < pantalla && hecho_dos != 0) {
        animateValue(obje, 0, 20, 1500, 0);
        console.log(hecho_dos);
        hecho_dos = 0;
    }
})


const objet = document.getElementById("value_tres");

window.addEventListener('scroll', function () {
    let animacion = document.getElementById('animado');
    let posicion = animacion.getBoundingClientRect().top;
    let pantalla = window.innerHeight / 1.5;

    if (posicion < pantalla && hecho_tres != 0) {
        animateValue(objet, 50, 500, 1500, 0);
        console.log(hecho_tres);
        hecho_tres = 0;
    }
})

