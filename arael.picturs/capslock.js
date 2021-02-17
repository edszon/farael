var caixa = document.getElementById("caixa");
var icone = document.getElementById("icone");

caixa.addEventListener("keyup", function(event){
    if (event.getModifierState("CapsLock")) {
        icone.style.display="block";
    }
    else {
        icone.style.display="none";
    }
});