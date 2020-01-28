function iniciar() {

	/*array associatiu id dels li i missatges*/
	var ingredients = {
		"trilogia1": "¡¡Primera SAGA!!", "trilogia2": "¡¡Segunda SAGA!!", "trilogia3": "¡¡Tercera SAGA!!"
	}
	//creem els diferents span//
	cont = 1;
	for (const id in ingredients) {
		if (cont == 1) {
			span1 = document.createElement("span");
			texto = document.createTextNode(ingredients[id]);
			span1.id = "tooltiptext1";
			span1.appendChild(texto);
			elem1 = document.getElementById(id);
			elem1.addEventListener("mouseover", function () { tooltip(span1, elem1) });
			elem1.addEventListener("mouseleave", function () { tooltipOut(span1) });
			cont++;
		} else if (cont == 2) {
			span2 = document.createElement("span");
			texto = document.createTextNode(ingredients[id]);
			span2.id = "tooltiptext2";
			span2.appendChild(texto);
			elem2 = document.getElementById(id);
			elem2.addEventListener("mouseover", function () { tooltip(span2, elem2) });
			elem2.addEventListener("mouseleave", function () { tooltipOut(span2) });
			cont++;
		} else {
			span3 = document.createElement("span");
			texto = document.createTextNode(ingredients[id]);
			span3.id = "tooltiptext3";
			span3.appendChild(texto);
			elem3 = document.getElementById(id);
			elem3.addEventListener("mouseover", function () { tooltip(span3, elem3) });
			elem3.addEventListener("mouseleave", function () { tooltipOut(span3) });
			cont++;
		}
	}
}

/*funció per mostrar un text en un span quan passem per damunt d'un element determinat*/
function tooltip(span, elem) {
	var coordinadaX = elem.offsetLeft;
	var coordinadaY = elem.offsetTop;
	span.style.left = coordinadaX +25 + "px";
	span.style.top = coordinadaY -20 +"px";
	document.body.appendChild(span);
	span.style.display = "block";
}
//funcio per a ocultar el span quan llevem el ratoli//
function tooltipOut(span) {
	span.style.display = "none";
}
/*funció per a executar-se quan s'acaba la càrrega de la pàgina*/
window.addEventListener("load", iniciar, false);

/*
propietats de l'esdeveniment per conéixer la posició de l'element:
	var coordinadaX = esdeveniment.target.offsetLeft;
	var coordinadaY = esdeveniment.target.offsetTop;
*/