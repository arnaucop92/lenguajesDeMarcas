personajes = [ 
    { "Nombre":"Darth Vader" , "Sexo":"Masculino" , "Raza":"Humano","Equipacion":"Sable de luz (Rojo)"}, 
    { "Nombre":"Chewbacca" , "Sexo":"Masculino" , "Raza":"Wookiee","Equipacion":"Bowcaster"}, 
];
    
    
    function iniciar(){
            cont = 2;
            personajes.map((element,i) =>{
                lista = document.createElement("ul");
                lista.setAttribute("class","ulObjetos");
                li = document.createElement("li");
                li.innerText = "Nombre:"+ element.Nombre;
                lista.append(li);
                li2 = document.createElement("li");
                li2.innerText = "Ocupacion:"+ element.Sexo;
                lista.append(li2);
                li3 = document.createElement("li");
                li3.innerText = "Sexo:"+ element.Raza;
                lista.append(li3);
                li4 = document.createElement("li");
                li4.innerText = "Arma:"+ element.Equipacion;
                lista.append(li4);
                document.getElementById("contenidoObjetos").append(lista);
            })
            document.getElementById('submit2').addEventListener("click", validar);
    }

function mostrar (){
    for (let i = cont; i < personajes.length; i++) {
        lista = document.createElement("ul");
        lista.setAttribute("class","ulObjetos");
        li = document.createElement("li");
        li.innerText = "Nombre:"+ personajes[i].Nombre;
        lista.append(li);
        li2 = document.createElement("li");
        li2.innerText = "Ocupacion:"+ personajes[i].Sexo;
        lista.append(li2);
        li3 = document.createElement("li");
        li3.innerText = "Sexo:"+ personajes[i].Raza;
        lista.append(li3);
        li4 = document.createElement("li");
        li4.innerText = "Arma:"+ personajes[i].Equipacion;
        lista.append(li4);
        document.getElementById("contenidoObjetos").append(lista);      
    }
    cont ++;
}    
function validar(esdeveniment){
    esdeveniment.preventDefault();
    var name = document.forms["RegForm"]["nom"];
    var sexo = document.forms["RegForm"]["sexo"];
    var raza = document.forms["RegForm"]["raza"];
    var equipamiento = document.forms["RegForm"]["equipamiento"];

    if (name.value == "" || sexo.value == "" || raza.value == "" || equipamiento == "") {
        window.alert("Por favor introduce tu nombre.");
        name.focus();
        return false;
    }

    var regex = /^[a-zA-Z]+$/;
    if (!name.value.match(regex)) {
        window.alert("Por favor no introduzcas numeros.");
        name.focus();
        return false;
    }
    var ventana = document.getElementById("finestraModal2");
	ventana.style.backgroundColor ="green";
    var nuevoPersonaje = { "Nombre":name.value , "Sexo":sexo.value , "Raza":raza.value,"Equipacion":equipamiento.value};
    personajes.push(nuevoPersonaje);
    
    mostrar();
    return true;
}
    
    window.addEventListener("load",iniciar,false);