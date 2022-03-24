https://jsfiddle.net/n6vrma7w/8/

var a = parseInt(prompt("ingrese un numero"));
var i;
var res = 1;
for (i = 1; i <= a; i++) {
    res = res * i;
}
alert("resultado" + res)


var a = parseInt(prompt("ingrese valor"))
var b = 1;
while (b <= a) {
    alert("hola mundo");
    b++;
}


var a = parseInt(prompt("Ingresar Hora"));
if (a < 12) {
    alert("buenos dias")
}
var i;
var c = "bueos dias"
var d = "Buenas tardes"
var res = 1;
while (i = 1; i >= a; i++) {
    res = res * i;
}
b++;
alert("resultado" + res)
// nuevo//

var a = parseInt(prompt("Ingrese un numero"));
var b = 1;

while (b <= a) {
    alert("Hola Mundo");
    b++;
}

var res = ("Digite el numero")
var res = 1;

for (i = 1; i <= 3; i++) {
    res = i + res
    alert("Como estan")
}

var Hora = prompt("Ingrese hora");
Hora = parseInt("Hora");


if (Hora <= 12) {
    alert("Buenos dias");
} else if (Hora <= 18) {
    alert("Buenas tardes")
} else {
    alert("Buenas noches")
}


Área del circulo = pi * r2
Área del triangulo = (b * h) / 2


var circulo = prompt("Ingrese Radio");
circulo = parseInt("Total");

var c1 = 3.14

if () {
    alert(Valor);
}

// tarea//

var numero = [1, 2, 3, 4, 5, 6];

for (i = 0; i < numero.length; i++) {
    alert(numero[i])
}


var numero = [1, 2, 3, 4, 5, 6];
var i = 0;

while (i < numero.length) {
    console.log(numero[i]);
    i++;

    var numero = [1, 2, 3, 4, 5, 6];
    var i = 0;

    while (i < numero.length) {
        console.log(numero[i] + 12)
        i++;
    }

    var numero = [1, 2, 3, 4, 5, 6];
    var numero2 = [];
    var i = 0;
    var prom = 0;

    for (i = 1; i < numero.length; i++) {
        numero2[i] = (numero[i] + 12);
        prom = prom + numero2[i];

    }
    prom = prom / numero2.length
    alert(prom);