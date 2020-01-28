function iniciar(){
    botoNormal = document.getElementById("normal");
    botoNormal.addEventListener("click",mostrarFormulario);
    botoJS = document.getElementById("js");
    botoJS.addEventListener("click",mostrarFormularioJS);
}
function mostrarFormulario(){

    console.log("hulio");
    formularioNormal = document.getElementById("formulari");
    formularioNormal.style.display = "block";
    formularioJS.style.display = "none";
}
function mostrarFormularioJS(){
    formularioJS = document.getElementById("formularicontacte");
    formularioJS.style.display = "block";
    formularioNormal.style.display = "none";
}
/*funció per a executar-se quan s'acaba la càrrega de la pàgina*/
window.addEventListener("load", iniciar, false);