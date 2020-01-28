//cridem al metode cambioColor amb la combinacio ctrl+c
function funcioInici() {

    document.oncopy =  cambioColor;

}
//Asigmem un color aleatori al rellotge
function cambioColor() {
 
    hexadecimal = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F")
    color_aleatorio = "#";
    for (i = 0; i < 6; i++) {
        posarray = aleatorio(0, hexadecimal.length)
        color_aleatorio += hexadecimal[posarray]
    }
    document.getElementById("rellotge").style.color = color_aleatorio;

}
window.addEventListener("load", funcioInici, false);