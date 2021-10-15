var boton = document.querySelector(".btn_abrir");
var menu = document.querySelector(".menu_movil");

boton.addEventListener("click", activarmenu);

function activarmenu() {
    menu.classList.toggle("oculto");
}
