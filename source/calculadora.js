var primerValor = document.getElementById("elementoUno");
var SegundoValor = document.getElementById("elementoDos");
var botoncito = document.getElementById("botonDeSuma");
var botonDeEnviar = document.getElementById("enviar");
var resultadoFinal = document.getElementById("result");
//botonDeEnviar.addEventListener("click");
botoncito.addEventListener("click", Operacion);
 
const usuario = document.getElementById("tipoDeOperacion");
console.log(usuario.value);

var Operaciones = {
    Suma: "sumar",
    Resta: "restar",
    Multiplicacion: "multiplicar",
    Dividir: "dividir"
};

function Operacion() {
    
    switch(usuario.value)
    {
        case Operaciones.Suma:
        var resultSuma = parseInt(primerValor.value)+ parseInt(SegundoValor.value);
        return resultadoFinal.innerHTML = "Tu resultado es: " + resultSuma;
        break;
        case Operaciones.Resta:
        var resultResta = primerValor.value - SegundoValor.value;
        return resultadoFinal.innerHTML ="Tu resultado es: " + resultResta;
        break;
        case Operaciones.Multiplicacion:
        var resultMultiplicar = primerValor.value * SegundoValor.value;
        return resultadoFinal.innerHTML ="Tu resultado es: " + resultMultiplicar;
        break;
        case Operaciones.Dividir:
        var resultDividir = primerValor.value / SegundoValor.value;
        return resultadoFinal.innerHTML="Tu resultado es: " + resultDividir;
        break;
    }
    console.log(primerValor.value, SegundoValor.value);
};

