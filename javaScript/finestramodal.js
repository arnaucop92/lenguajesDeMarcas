function funcioInici() {
	boto = document.getElementById("cap");
	boto.addEventListener("click", mostraModal);
	tancaFinestra = document.getElementById("tancaFinestra");
	tancaFinestra.addEventListener("click", ocultaModal);
	botoModal = document.getElementById("botoModal");
	botoModal.addEventListener("click", ocultaModal);
	audio = document.getElementById("intro");

}

// funció per mostrar la finestra modal
function mostraModal() {

	var ventana = document.getElementById("finestraModal");
	elem = document.getElementById("principal");
	elem.insertBefore(ventana, elem.childNodes[0]);
	ventana.style.display = "block";
	iconomapa = document.getElementById("iconoMapa");
	iconoJson = document.getElementById("iconoJson");
	iconomapa.style.display = "none";
	iconoJson.style.display = "none";
	audio.play();
}

// funció per ocultar la finestra modal
function ocultaModal() {
	var ventana = document.getElementById("finestraModal");
	ventana.style.display = "none";
	iconomapa.style.display = "block";
	iconoJson.style.display = "block";
	audio.pause();
	audio.currentTime = 0;
}

// funció per ocultar la finestra modal quan es fa clic fora de la finestra
function ocultaModalClicFora(lEsdeveniment) {
	var esdeveniment = lEsdeveniment || window.event;


}



window.addEventListener("load", funcioInici, false);