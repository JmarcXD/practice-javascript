var resultTag = document.getElementById("result");

var number = document.getElementById("number");
var power = document.getElementById("power");

document.getElementById("calculate").addEventListener("click", function(){
    var result = number.value;
    
    for (let i = 1; i < power.value; i++) {
        result *= number.value;
    }

    resultTag.innerHTML = "Resultado es: " + result;
});

   
    
