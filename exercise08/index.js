var identification = document.getElementById("identification");

var letters = "TRWAGMYFPDXBNJZSQVHLCKE";

document.getElementById("validate").addEventListener("click", function(){
    let numberDNI = identification.value.substring(0,8);
    let letterDNI = identification.value.substring(8,9);

    let letterValidate = letters[numberDNI % 23];

    if(letterDNI != letterValidate)
        alert("Esta mal la letra (es "+ letterValidate +")");
    else
        alert("Correcto el DNI");
});