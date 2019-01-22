import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
      `
        .ng-invalid.ng-touched:not(form){
            border: 1px solid red;
        }

      `
  ]
})
export class TemplateComponent implements OnInit {

    usuario:Object = {
        nombre: null,
        apellido: null,
        correo:null,
        pais: "",
        genero:'Femenino',
        acepta:false
    }

    paises = [
        {
            codigo:'MEX',
            nombre:'Mexico'
        },
        {
            codigo:'ESP',
            nombre:'España'
        }
    ];

    generos:string[] = ["Masculino", "Femenino", "Sin Definir"];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
      console.log("ngform: ",forma);
      console.log("valor forma: ", forma.value);

      console.log("usuario", this.usuario);
  }

}
