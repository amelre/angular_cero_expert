"use strict";
// let miFuncion2  = (a:number, b:number) => a + b;
//
// console.log(miFuncion2(2,4));
//
// let hulk = {
//   nombre: "Hulk",
//   smash(){
//     console.log(this.nombre + " smash!!!!");
//   }
// }
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Finish");
        resolve();
    }, 1500);
});
prom1.then(function () {
    console.log("Ejecutarme cuando se termine bien!");
}, function () {
    console.error("Ejecutarme cuando todo sale mal");
});
