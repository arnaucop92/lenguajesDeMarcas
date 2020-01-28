function funcioInici(){

setInterval(hora,1000); 

}

function hora() {

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();
var segon = f.getSeconds();
var minuts = f.getMinutes();
var hores = f.getHours();
document.getElementById('rellotge').innerHTML = (comprobar(hores) + ":" + comprobar(minuts)+ ":" 
+ comprobar(segon) + "<br>" + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}

//comprobem si els valors van del 0 al 9 per añadir un 0
function comprobar(segon){
    if(segon < 10 ){
        segon = "0" + segon;
    }
    return segon;
}
window.addEventListener("load",funcioInici,false);