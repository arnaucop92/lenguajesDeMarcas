function iniciar() {
    document.ready = document.getElementById("selectprimer").value = "";
    animal = new Array('gat', 'gos');
    vegetal = new Array('pi', 'palmera');
    mineral = new Array('diamant', 'ferro');

    cont = 0;
    cont2 = 0;
    llista = document.getElementById("selectprimer");
    llista.addEventListener("change", mostrarSelect);
    llista2 = document.getElementById("selectsegon");
    llista2.addEventListener("change", mostrarFoto);
}
function mostrarSelect() {
    indexSeleccionat = llista.selectedIndex;
    if (indexSeleccionat == 0) {
        ocultarSelect();
    } else {
        if (cont2 == 0) {
            valor = llista.options[llista.selectedIndex].value
            if (valor == "animal") {
                arr = animal;
            } else if (valor == "vegetal") {
                arr = vegetal;
            } else if (valor == "mineral") {
                arr = mineral;
            }
            for (i = 0; i < arr.length; i++) {
                option = document.createElement("option");
                option.text = arr[i];
                llista2.add(option);
            }

            llista2.style.opacity = 1;
            cont2++;
        } else if (cont2 == 1) {
            for (i = 0; i < arr.length; i++) {
                llista2.remove(1);
            }
            cont2 = 0;
            mostrarSelect();
        }
    }
}
function ocultarSelect() {
    llista2.style.opacity = 0;
    divImagen.style.display = "none";
}
function mostrarFoto() {
    indexSeleccionat2 = llista2.selectedIndex;
    if(cont == 0){
        valor2 = llista2.options[llista2.selectedIndex].value;
        divImagen = document.getElementById("imatge");
        imagen = document.createElement("img");
        imagen.src="../img/select/"+valor2+".jpg";
        divImagen.appendChild(imagen);
        divImagen.style.display = "block";
        cont ++;
    }else{
        if(indexSeleccionat2 == 0){
            divImagen.style.display = "none";
        }else{
        valor2 = llista2.options[llista2.selectedIndex].value;
        imagen.src="../img/select/"+valor2+".jpg";
        divImagen.style.display = "block";
        }      
    }
}
/*funció per a executar-se quan s'acaba la càrrega de la pàgina*/
window.addEventListener("load", iniciar, false);