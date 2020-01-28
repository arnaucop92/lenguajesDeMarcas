function iniciar(){	

	//alerta(element al principi del qual s'insereix,id de l'element,text de l'alerta);
	alerta("navegacio","alert","Haz clic en la x para cerrar este mensaje");
}

/*funció per mostrar una alerta en pantalla */
function alerta(id_element_dest,nom_id,text_element){
cos = document.createElement("div");
cos.id = nom_id;
elem = document.getElementById(id_element_dest);

close = document.createElement("span");
cos.appendChild(close);
close.className = "tancar";

texto2 = document.createTextNode("X");
close.appendChild(texto2);
close.addEventListener("click",tancar_alerta);

texto = document.createTextNode(text_element);
cos.appendChild(texto);
elem.insertBefore(cos,elem.childNodes[0]);

document.getElementById(nom_id).appendChild.innerHTML='<img src="../img/alert.png" />';


hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F") 
color_aleatorio = "#"; 
for (i=0;i<6;i++){ 
   posarray = aleatorio(0,hexadecimal.length) 
   color_aleatorio += hexadecimal[posarray] 
} 
document.getElementById(nom_id).style.backgroundColor = color_aleatorio;

}

/* funció per eliminar la caixa de l'alerta a la que s'ha fet clic sobre la x */
function tancar_alerta(lEsdeveniment){
	this.parentElement.style.display='none';
	
}

/*altres funcions*/
function aleatorio(inferior,superior){ 
	numPosibilidades = superior - inferior 
	aleat = Math.random() * numPosibilidades 
	aleat = Math.floor(aleat) 
	return parseInt(inferior) + aleat 
 }
 
/*funció per a executar-se quan s'acaba la càrrega de la pàgina*/
window.addEventListener("load",iniciar,false);