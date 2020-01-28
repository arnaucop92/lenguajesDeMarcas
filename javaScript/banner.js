function funcioInici() {
    localizacion = new Array("img/pie.jpg", "img/cabeza9.jpg", "img/cabeza.jpg", "img/cabeza10-1.jpg", "img/contenido4.jpg");
    banner = 0;
    setInterval(cambioFoto, 3000);

}

function cambioFoto() {

    banner++;
    if (banner == localizacion.length) {
        banner = 0;
    }
    document.getElementById("banner").src = localizacion[banner];
}


window.addEventListener("load", funcioInici, false);