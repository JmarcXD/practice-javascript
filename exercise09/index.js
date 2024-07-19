var colorTarget = document.getElementsByName("colorTarget");

var nameUser = prompt("Introduce el nombre: ");
var age = prompt("Introduce tu edad: ");

alert("Hola " + nameUser + " tienes " + age*365);

var suma = 0;
var numero = 0;

do{
    numero++;

    if(numero % 23 == 0)
        suma += numero;
}while(numero <= 1000)

document.getElementById("calculo").innerHTML = suma;

function ChangeColorBg(color) {
    switch (color) {
        case "blue":
            for (let i = 0; i < colorTarget.length; i++) {
                if (colorTarget[i].checked && colorTarget[i].value == "document")
                    document.body.style.backgroundColor = "blue";
                else if (colorTarget[i].checked && colorTarget[i].value == "box")
                    document.getElementById("capa").style.backgroundColor = "blue";
            }
            break;
        case "grey":
            for (let i = 0; i < colorTarget.length; i++) {
                if (colorTarget[i].checked && colorTarget[i].value == "document")
                    document.body.style.backgroundColor = "grey";
                else if (colorTarget[i].checked && colorTarget[i].value == "box")
                    document.getElementById("capa").style.backgroundColor = "grey";
            }
            break;
        case "green":
            for (let i = 0; i < colorTarget.length; i++) {
                if (colorTarget[i].checked && colorTarget[i].value == "document")
                    document.body.style.backgroundColor = "green";
                else if (colorTarget[i].checked && colorTarget[i].value == "box")
                    document.getElementById("capa").style.backgroundColor = "green";
            }
            break;
        case "red":
            for (let i = 0; i < colorTarget.length; i++) {
                if (colorTarget[i].checked && colorTarget[i].value == "document")
                    document.body.style.backgroundColor = "red";
                else if (colorTarget[i].checked && colorTarget[i].value == "box")
                    document.getElementById("capa").style.backgroundColor = "red";
            }
            break;
        case "yellow":
            for (let i = 0; i < colorTarget.length; i++) {
                if (colorTarget[i].checked && colorTarget[i].value == "document")
                    document.body.style.backgroundColor = "yellow";
                else if (colorTarget[i].checked && colorTarget[i].value == "box")
                    document.getElementById("capa").style.backgroundColor = "yellow";
            }
            break;
    }
}

function NameAge(){
    var name = document.getElementById("name");
    var age = document.getElementById("age");

    document.getElementById("nameAge").innerHTML = "Hola " + name.value + " y tienes " + age.value*365+"dias"; 
}