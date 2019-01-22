//Problem1 Let Const

let fullName:string = "Alejandra Melendez";
let age:number = 22;

const CHARACTER:{nombre:string, edad:number} = {
  nombre : fullName,
  edad : age
}
console.log(`El nombre del personaje es ${CHARACTER.nombre} y su edad es ${CHARACTER.edad}`);

//Problem 2 Interface

interface SuperHero{
  nombre:string,
  artesMarciales:Array<string> //string[]
}

let batman:SuperHero = {
  nombre: "Bruno Días",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
}

function printSuperHero(superHero:SuperHero){
  let print = `El super héroe es ${superHero.nombre} y sabe: `;

  for(let artesM of superHero.artesMarciales){
    print += ` ${artesM} `;
  }
  console.log(print);
}

printSuperHero(batman);

//Problem 3 Arroy function
let resultadoDoble = (a:number,b:number)=>(a+b)*2;

console.log(resultadoDoble(2,3));

//Problem 4 Default Parameters
function getAvenger(nombre:string, arma:string = "Arco", poder?:string){
  var message;
  if(poder){
    message = `${nombre}  tiene el poder de ${poder} y un arma de ${arma}`;
  }else{
      message = `${nombre}  tiene el arma de ${arma}`;
  }
  return message;
}

console.log(getAvenger('Iron Man'));
console.log(getAvenger('Capitan America','Escudo'));
console.log(getAvenger('Spider Man','Puños','Aracnido'));

//Problem 5 Class

class Rectangulo {
  base:number;
  altura:number;

  constructor(base:number, altura:number){
    this.base = base;
    this.altura = altura;
  }

  calculateArea():number{
    return this.base * this.altura;
  }


}

let miRectangulo = new Rectangulo(5,3);

console.log(`El area de mi rectangulo de base ${miRectangulo.base} y altura ${miRectangulo.altura} es: ${miRectangulo.calculateArea()} `);
