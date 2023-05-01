function   calculo  (  )   { 
    
    var valor1 = parseFloat(document.getElementById("peso").value);
    var valor2 = parseFloat(document.getElementById("altura").value);

    var result = document.getElementById("peso");
    
    var imc = (valor1 / valor2 ** 2).toFixed(2);

    document.getElementById("res").innerHTML = imc

    var marcado = document.getElementById("faixa_etaria").checked
    if (marcado) {
        adulto(imc)
    } else {
        idoso(imc)
    }
    valor1 = ""
    valor2 = ""
} 

function  adulto ( imc )  { 

    var img = "" 

    if (imc < 18.5) {
        img = "../imagens/1.png"
    }
    else if (imc >= 18.6 && imc <= 24.9) {
        img = "../imagens/2.png"
    }
    else if (imc >= 25 && imc <= 29.9) {
        img = "../imagens/3.png"
    }
    else if (imc >= 30 && imc <= 34.9) {
        img = "../imagens/4.png"
    }
    else if (imc >= 35) {
        img = "../imagens/5.png"
    }

    document.getElementById("imc_img").src = img 

} 

function idoso(imc) {

    var img = ""

    if (imc < 23) {
        img = "../imagens/1.png"
    }
    else if (imc >= 23 && imc < 28) {
        img = "../imagens/2.png"
    }
    else if (imc >= 28) {
        img = "../imagens/4.png"
    }

    console.log(img)
    document.getElementById("imc_img").src = img

} 