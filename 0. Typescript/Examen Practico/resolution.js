"use strict";
//Problem1 Let Const
var fullName = "Alejandra Melendez";
var age = 22;
var CHARACTER = {
    nombre: fullName,
    edad: age
};
console.log("El nombre del personaje es " + CHARACTER.nombre + " y su edad es " + CHARACTER.edad);
var batman = {
    nombre: "Bruno Días",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
function printSuperHero(superHero) {
    var print = "El super h\u00E9roe es " + superHero.nombre + " y sabe: ";
    for (var _i = 0, _a = superHero.artesMarciales; _i < _a.length; _i++) {
        var artesM = _a[_i];
        print += " " + artesM + " ";
    }
    console.log(print);
}
printSuperHero(batman);
//Problem 3 Arroy function
var resultadoDoble = function (a, b) { return (a + b) * 2; };
console.log(resultadoDoble(2, 3));
//Problem 4 Default Parameters
function getAvenger(nombre, arma, poder) {
    if (arma === void 0) { arma = "Arco"; }
    var message;
    if (poder) {
        message = nombre + "  tiene el poder de " + poder + " y un arma de " + arma;
    }
    else {
        message = nombre + "  tiene el arma de " + arma;
    }
    return message;
}
console.log(getAvenger('Iron Man'));
console.log(getAvenger('Capitan America', 'Escudo'));
console.log(getAvenger('Spider Man', 'Puños', 'Aracnido'));
//Problem 5 Class
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calculateArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var miRectangulo = new Rectangulo(5, 3);
console.log("El area de mi rectangulo de base " + miRectangulo.base + " y altura " + miRectangulo.altura + " es: " + miRectangulo.calculateArea() + " ");
