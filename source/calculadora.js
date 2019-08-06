var primerValor = document.getElementById("elementoUno");
var SegundoValor = document.getElementById("elementoDos");
var botoncito = document.getElementById("botonDeSuma");
var botonDeEnviar = document.getElementById("enviar");

//botonDeEnviar.addEventListener("click");
botoncito.addEventListener("click", Operacion);
 
const usuario = document.getElementById("tipoDeOperacion");
console.log(usuario.value);

var Operaciones = {
    Suma: "suma",
    Resta: "resta",
    Multiplicacion: "multiplicar",
    Dividir: "dividir"
};

function Operacion() {
    
    switch(usuario.value)
    {
        case Operaciones.Suma:
        var resultSuma = parseInt(primerValor.value)+ parseInt(SegundoValor.value);
        return alert ("Tus resultado es: " + resultSuma);
        break;
        case Operaciones.Resta:
        var resultResta = primerValor.value - SegundoValor.value;
        return alert("Tus resultado es: " + resultResta);
        break;
        case Operaciones.Multiplicacion:
        var resultMultiplicar = primerValor.value * SegundoValor.value;
        return alert("Tus resultado es: " + resultMultiplicar);
        break;
        case Operaciones.Dividir:
        var resultDividir = primerValor.value / SegundoValor.value;
        return alert("Tus resultado es: " + resultDividir);
        break;
    }
    console.log(primerValor.value, SegundoValor.value);
};

