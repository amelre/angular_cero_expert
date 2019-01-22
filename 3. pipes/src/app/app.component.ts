import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    nombre:string = "Alejandra";
    nombre2 = "aLeJandrA melenDEz reYes";

    arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];

    PI:any = Math.PI;

    a = 0.234;

    salario = 1324.5;

    video:string = "cwZ0NHyz9n8";

    activar:boolean = true;

    heroe = {
      nombre:"Logan",
      clave:"Wolverine",
      edad:500,
      direccion:{
        calle:"Primera",
        casa:"19",
        colonia:"Grande"
      }
    };


    valorDePromesa = new Promise(
      (resolve, reject)=>{
        setTimeout(()=>resolve('Llegó la data'),3500);
      }
    );


    fecha = new Date();
}
