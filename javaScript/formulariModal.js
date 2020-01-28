function funcioInici() {
	boto = document.getElementById("botonPerso");
	boto.addEventListener("click", mostraModal);
	tancaFinestra = document.getElementById("tancaFinestra");
	tancaFinestra.addEventListener("click", ocultaModal);
	botoModal = document.getElementById("botoModal");
	botoModal.addEventListener("click", ocultaModal);

}

// funció per mostrar la finestra modal
function mostraModal() {

	var ventana = document.getElementById("finestraModal2");
	ventana.style.display = "block";
}

// funció per ocultar la finestra modal
function ocultaModal() {
	var ventana = document.getElementById("finestraModal2");
	ventana.style.display = "none";
	ventana.style.backgroundColor ="red";
}

// funció per ocultar la finestra modal quan es fa clic fora de la finestra
function ocultaModalClicFora(lEsdeveniment) {
	var esdeveniment = lEsdeveniment || window.event;
}



window.addEventListener("load", funcioInici, false);