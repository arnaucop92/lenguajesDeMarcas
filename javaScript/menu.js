function iniciar(){	

	/*document.querySelectorAll(".botomenu")[0].addEventListener("mouseover",desplegamenu);
        document.querySelector(".contingutmenu").style.display = "none"; */
        boto = document.getElementById("botomenu");
        boto.addEventListener("mouseover",desplegamenu);
        boto.addEventListener("mouseleave",ocultamenu);
        boto.style.position = "relative";
        drop = document.getElementById("contingutmenu");
	
}
//funció que s'executa quan passem per damunt d'un dels botons del menú <li class="botomenu">
function desplegamenu(){
	/*var estado = document.querySelector(".contingutmenu").style.display;
        if (estado == "none"){
            document.querySelector(".contingutmenu").style.position = "absolute";
            document.querySelector(".contingutmenu").style.display = "block";
        }else{
            document.querySelector(".contingutmenu").style.display = "none";            
        };
        console.log("entra");*/
        //drop.style.position = "absolute";
        drop.style.display = "block";
        //drop.style.left = boto.offsetLeft + "px";
}
//funció que s'executa quan eixim d'un dels botons <li class="botomenu">
function ocultamenu(){
    drop.style.display = "none";
	//obtenim l'element que conté els subapartats i l'ocultem

}
/*funció per a executar-se quan s'acaba la càrrega de la pàgina*/
window.addEventListener("load",iniciar,false);