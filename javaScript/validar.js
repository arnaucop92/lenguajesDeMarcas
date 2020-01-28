function iniciar() {
    document.getElementById('submit').addEventListener("click", validar);
    document.getElementById('reset2').addEventListener("click", reset);
    document.getElementById('comentario').addEventListener("keyup", countChars);
    document.getElementById('peli1').addEventListener("click", prueba);
}

function prueba() {
    // Get the checkbox
    var checkBox = document.getElementById("peli1");
    // Get the output text
    var text = document.getElementById("conditional_part");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function validar(esdeveniment) {
    esdeveniment.preventDefault();
    var name = document.forms["RegForm"]["nom"];
    var surname = document.forms["RegForm"]["cognoms"];
    var email = document.forms["RegForm"]["mail"];


    if (name.value == "") {
        window.alert("Por favor introduce tu nombre.");
        name.focus();
        return false;
    }

    if (name.value.length > 20) {
        alert("Por favor limitate a los 20 caracteres");
        return false;
    }

    if (surname.value == "") {
        window.alert("Por favor introduce tu apellido.");
        surname.focus();
        return false;
    }

    var regex = /^[a-zA-Z]+$/;
    if (!surname.value.match(regex)) {

        window.alert("Por favor no introduzcas numeros.");
        surname.focus();
        return false;
    }

    if (!name.value.match(regex)) {

        window.alert("Por favor no introduzcas numeros.");
        surname.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Por favor introduce un correo valido.");
        email.focus();
        return false;
    }
    var regex2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.match(regex2)) {
        window.alert("Por favor introduce un correo valido.");
        email.focus();
        return false;
    }

    chosen = "";
    tamanyo = document.RegForm.saga.length;

    for (i = 0; i < tamanyo; i++) {
        if (document.RegForm.saga[i].checked) {
            chosen = document.RegForm.saga[i].value
        }
    }

    if (chosen == "") {
        alert("Por favor selecciona una saga.");
        return false;
    }

    return true;
}

function reset() {
    document.getElementById('comentario').value = '';
    len = 0;
    document.getElementById('caracteres').innerHTML = "Caracteres: "+len;
}

function countChars() {
    len = document.getElementById('comentario').value.length;
    document.getElementById('caracteres').innerHTML = "Caracteres: "+len;

}



window.addEventListener("load", iniciar, false);


